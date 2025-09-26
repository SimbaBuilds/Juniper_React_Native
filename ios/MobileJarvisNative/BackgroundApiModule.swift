import Foundation
import React
import BackgroundTasks
import UIKit

@objc(BackgroundApiModule)
@objcMembers
class BackgroundApiModule: RCTEventEmitter {

    // MARK: - Properties
    private var backgroundSession: URLSession!
    private var pendingRequests: [String: BackgroundApiRequest] = [:]
    private var completedRequests: [String: BackgroundApiResponse] = [:]
    private var hasListeners = false
    private var activeDataTasks: [String: URLSessionDataTask] = [:]
    private var taskData: [String: NSMutableData] = [:]

    // MARK: - Data Models
    struct BackgroundApiRequest {
        let requestId: String
        let url: String
        let method: String
        let headers: [String: String]
        let body: Data?
        let timestamp: Date
    }

    struct BackgroundApiResponse {
        let requestId: String
        let data: Data?
        let response: URLResponse?
        let error: Error?
        let timestamp: Date
    }

    // MARK: - Initialization
    override init() {
        super.init()
        setupBackgroundSession()
        print("🔧 BackgroundApiModule: Initialized")
    }

    private func setupBackgroundSession() {
        // Simplified: Use default configuration with long timeout
        // iOS will automatically handle background processing for this session
        let config = URLSessionConfiguration.default
        config.timeoutIntervalForRequest = 1200 // 20 minutes
        config.timeoutIntervalForResource = 1200 // 20 minutes
        config.waitsForConnectivity = true
        config.allowsCellularAccess = true

        backgroundSession = URLSession(configuration: config, delegate: self, delegateQueue: nil)
        print("🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout")
        NSLog("🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout")

    }

    // MARK: - React Native Event Emitter
    override func supportedEvents() -> [String]! {
        return [
            "BackgroundApiProgress",
            "BackgroundApiComplete",
            "BackgroundApiError"
        ]
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
    }

    // MARK: - React Native Methods

    @objc
    func sendBackgroundRequest(
        _ requestId: String,
        url: String,
        method: String,
        headers: [String: String],
        body: String?,
        resolver: @escaping RCTPromiseResolveBlock,
        rejecter: @escaping RCTPromiseRejectBlock
    ) {
        print("🌐 BackgroundApiModule: Starting background request \(requestId)")
        print("🌐 BackgroundApiModule: URL: \(url)")
        print("🌐 BackgroundApiModule: Method: \(method)")
        NSLog("🌐 BackgroundApiModule: Starting background request \(requestId)")
        NSLog("🌐 BackgroundApiModule: URL: \(url)")
        NSLog("🌐 BackgroundApiModule: Method: \(method)")

        guard let requestUrl = URL(string: url) else {
            rejecter("INVALID_URL", "Invalid URL provided", nil)
            return
        }

        // Create URLRequest
        var urlRequest = URLRequest(url: requestUrl)
        urlRequest.httpMethod = method
        urlRequest.timeoutInterval = 1200 // 20 minutes

        // Create multipart/form-data body if we have JSON data
        var requestBody: Data? = nil
        if let bodyString = body {
            let boundary = "Boundary-\(UUID().uuidString)"
            urlRequest.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")

            // Create multipart body
            var bodyData = Data()

            // Add boundary
            bodyData.append("--\(boundary)\r\n".data(using: .utf8)!)
            bodyData.append("Content-Disposition: form-data; name=\"json_data\"\r\n\r\n".data(using: .utf8)!)
            bodyData.append(bodyString.data(using: .utf8)!)
            bodyData.append("\r\n--\(boundary)--\r\n".data(using: .utf8)!)

            requestBody = bodyData
            urlRequest.httpBody = requestBody

            print("🌐 BackgroundApiModule: ✅ Created multipart body")
        }

        // Add other headers (skip Content-Type as we set it above)
        for (key, value) in headers {
            if key.lowercased() != "content-type" {
                urlRequest.setValue(value, forHTTPHeaderField: key)
            }
        }

        // Store request info
        let apiRequest = BackgroundApiRequest(
            requestId: requestId,
            url: url,
            method: method,
            headers: headers,
            body: requestBody,
            timestamp: Date()
        )
        pendingRequests[requestId] = apiRequest

        // Initialize data storage for this request
        taskData[requestId] = NSMutableData()

        // Create and start background task
        let task = backgroundSession.dataTask(with: urlRequest)
        task.taskDescription = requestId // Use task description to track request ID
        activeDataTasks[requestId] = task
        task.resume()

        print("🌐 BackgroundApiModule: Background task started for request \(requestId)")
        NSLog(" 🌐 BackgroundApiModule: Background task started for request \(requestId)")
        resolver(["success": true, "requestId": requestId])
    }

    @objc
    func getCompletedRequest(
        _ requestId: String,
        resolver: @escaping RCTPromiseResolveBlock,
        rejecter: @escaping RCTPromiseRejectBlock
    ) {
        print("🔍 BackgroundApiModule: Checking for completed request \(requestId)")
        NSLog("🔍 BackgroundApiModule: Checking for completed request \(requestId)")
        if let completedResponse = completedRequests[requestId] {
            print("✅ BackgroundApiModule: Found completed request \(requestId)")
            NSLog("✅ BackgroundApiModule: Found completed request \(requestId)")
            var result: [String: Any] = [
                "requestId": requestId,
                "timestamp": completedResponse.timestamp.timeIntervalSince1970
            ]

            if let error = completedResponse.error {
                result["error"] = error.localizedDescription
                result["success"] = false
            } else if let data = completedResponse.data {
                result["success"] = true
                if let dataString = String(data: data, encoding: .utf8) {
                    result["data"] = dataString
                } else {
                    result["data"] = data.base64EncodedString()
                }

                if let httpResponse = completedResponse.response as? HTTPURLResponse {
                    result["statusCode"] = httpResponse.statusCode
                    result["headers"] = httpResponse.allHeaderFields
                }
            }

            // Clean up completed request
            completedRequests.removeValue(forKey: requestId)
            resolver(result)
        } else {
            // Request not completed yet or doesn't exist
            resolver(["success": false, "pending": pendingRequests[requestId] != nil])
        }
    }

    @objc
    func cancelBackgroundRequest(
        _ requestId: String,
        resolver: @escaping RCTPromiseResolveBlock,
        rejecter: @escaping RCTPromiseRejectBlock
    ) {
        print("🚫 BackgroundApiModule: Cancelling background request \(requestId)")
        NSLog("🚫 BackgroundApiModule: Cancelling background request \(requestId)")
        // Cancel active task if it exists
        if let task = activeDataTasks[requestId] {
            task.cancel()
            print("🚫 BackgroundApiModule: Cancelled active task for request \(requestId)")
        }

        // Clean up all request data
        pendingRequests.removeValue(forKey: requestId)
        completedRequests.removeValue(forKey: requestId)
        activeDataTasks.removeValue(forKey: requestId)
        taskData.removeValue(forKey: requestId)

        resolver(["success": true, "requestId": requestId])
    }

    @objc
    func getPendingRequests(
        _ resolver: @escaping RCTPromiseResolveBlock,
        rejecter: @escaping RCTPromiseRejectBlock
    ) {
        let pendingIds = Array(pendingRequests.keys)
        resolver(["requestIds": pendingIds])
    }

    // MARK: - Helper Methods
    private func sendEventToReactNative(name: String, body: [String: Any]) {
        if hasListeners {
            sendEvent(withName: name, body: body)
        }
    }
}

// MARK: - URLSessionDelegate
extension BackgroundApiModule: URLSessionDelegate, URLSessionDataDelegate {

    func urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didReceive data: Data) {
        guard let requestId = dataTask.taskDescription else { return }

        print("📊 BackgroundApiModule: Receiving data for request \(requestId), bytes: \(data.count)")
        NSLog("📊 BackgroundApiModule: Receiving data for request \(requestId), bytes: \(data.count)")
        // Accumulate data for this request
        if let mutableData = taskData[requestId] {
            mutableData.append(data)
            print("📊 BackgroundApiModule: Total accumulated data: \(mutableData.length) bytes")
        }

        // Update progress if needed
        sendEventToReactNative(name: "BackgroundApiProgress", body: [
            "requestId": requestId,
            "bytesReceived": data.count,
            "totalBytes": taskData[requestId]?.length ?? 0
        ])
    }

    func urlSession(_ session: URLSession, dataTask: URLSessionDataTask, didCompleteWithError error: Error?) {
        guard let requestId = dataTask.taskDescription else { return }

        print("🏁 BackgroundApiModule: Request \(requestId) completed")
        NSLog("🏁 BackgroundApiModule: Request \(requestId) completed")
        // Get accumulated data
        let accumulatedData = taskData[requestId] as Data?

        if let error = error {
            print("❌ BackgroundApiModule: Request \(requestId) failed with error: \(error)")

            // Store error response
            let response = BackgroundApiResponse(
                requestId: requestId,
                data: nil,
                response: dataTask.response,
                error: error,
                timestamp: Date()
            )
            completedRequests[requestId] = response

            // Notify React Native
            sendEventToReactNative(name: "BackgroundApiError", body: [
                "requestId": requestId,
                "error": error.localizedDescription
            ])
        } else {
            print("✅ BackgroundApiModule: Request \(requestId) completed successfully with \(accumulatedData?.count ?? 0) bytes")
            NSLog("✅ BackgroundApiModule: Request \(requestId) completed successfully with \(accumulatedData?.count ?? 0) bytes")
            // Store successful response with accumulated data
            let response = BackgroundApiResponse(
                requestId: requestId,
                data: accumulatedData,
                response: dataTask.response,
                error: nil,
                timestamp: Date()
            )
            completedRequests[requestId] = response

            // Notify React Native of completion
            sendEventToReactNative(name: "BackgroundApiComplete", body: [
                "requestId": requestId,
                "dataSize": accumulatedData?.count ?? 0
            ])
        }

        // Clean up
        pendingRequests.removeValue(forKey: requestId)
        activeDataTasks.removeValue(forKey: requestId)
        taskData.removeValue(forKey: requestId)
    }

    func urlSession(_ session: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingTo location: URL) {
        guard let requestId = downloadTask.taskDescription else { return }

        print("✅ BackgroundApiModule: Download completed for request \(requestId)")
        NSLog("✅ BackgroundApiModule: Download completed for request \(requestId)")
        do {
            let data = try Data(contentsOf: location)

            // Store successful response
            let response = BackgroundApiResponse(
                requestId: requestId,
                data: data,
                response: downloadTask.response,
                error: nil,
                timestamp: Date()
            )
            completedRequests[requestId] = response

            // Notify React Native
            sendEventToReactNative(name: "BackgroundApiComplete", body: [
                "requestId": requestId,
                "dataSize": data.count
            ])

        } catch {
            print("❌ BackgroundApiModule: Error reading downloaded data: \(error)")
            NSLog("❌ BackgroundApiModule: Error reading downloaded data: \(error)")
            // Store error response
            let response = BackgroundApiResponse(
                requestId: requestId,
                data: nil,
                response: downloadTask.response,
                error: error,
                timestamp: Date()
            )
            completedRequests[requestId] = response

            sendEventToReactNative(name: "BackgroundApiError", body: [
                "requestId": requestId,
                "error": error.localizedDescription
            ])
        }
    }

    // Simplified: No need for complex background session handling
}