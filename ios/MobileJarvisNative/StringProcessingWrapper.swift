import Foundation
import React

@objc(StringProcessingWrapper)
class StringProcessingWrapper: NSObject {
    
    private static let maxStringLength = 10000
    private static let maxProcessingTime: TimeInterval = 5.0
    
    enum StringProcessingError: Error {
        case stringTooLong
        case processingTimeout
        case memoryAllocationFailed
        case invalidEncoding
        case localeProcessingFailed
    }
    
    // MARK: - Safe String Operations
    
    /// Safely process strings with memory bounds checking
    @objc static func safeStringCopy(_ input: String?) -> String? {
        guard let input = input else { return nil }
        
        // Length validation
        guard input.count <= maxStringLength else {
            logError("String too long for safe processing: \(input.count) characters")
            return String(input.prefix(maxStringLength))
        }
        
        // Memory-safe string copying
        return autoreleasepool {
            do {
                let result = try performWithTimeout(maxProcessingTime) {
                    return String(input)
                }
                return result
            } catch {
                logError("Safe string copy failed: \(error)")
                return input.count <= 1000 ? String(input) : String(input.prefix(1000))
            }
        }
    }
    
    /// Safely process locale-related string operations
    @objc static func safeLocaleStringProcessing(_ input: String?, locale: String?) -> String? {
        guard let input = input else { return nil }
        
        let safeLocale = validateAndGetSafeLocale(locale)
        
        return autoreleasepool {
            do {
                let result = try performWithTimeout(maxProcessingTime) {
                    return try processStringWithLocale(input, locale: safeLocale)
                }
                return result
            } catch StringProcessingError.localeProcessingFailed {
                logError("Locale processing failed, using fallback")
                return safeStringCopy(input)
            } catch {
                logError("Locale string processing error: \(error)")
                return safeStringCopy(input)
            }
        }
    }
    
    /// Validate locale and return safe fallback if needed
    private static func validateAndGetSafeLocale(_ locale: String?) -> String {
        guard let locale = locale else { return "en_US" }
        
        // Check for known problematic locales on iPhone 14 Pro
        let problematicLocales = [
            "zh-Hans-CN",
            "ar-SA", 
            "hi-IN"
        ]
        
        if problematicLocales.contains(locale) {
            logWarning("Using safe fallback for problematic locale: \(locale)")
            return "en_US"
        }
        
        // Basic locale validation
        if locale.count > 10 || locale.contains("@") || locale.contains("#") {
            logWarning("Invalid locale format, using fallback: \(locale)")
            return "en_US"
        }
        
        return locale
    }
    
    /// Process string with locale using safe ICU operations
    private static func processStringWithLocale(_ input: String, locale: String) throws -> String {
        // Validate input length
        guard input.count <= maxStringLength else {
            throw StringProcessingError.stringTooLong
        }
        
        // Attempt locale-aware processing with fallbacks
        do {
            // Try primary locale processing
            let result = try processWithICU(input, locale: locale)
            return result
        } catch {
            // Fallback to English locale
            logWarning("Primary locale processing failed, trying English fallback")
            do {
                let result = try processWithICU(input, locale: "en_US")
                return result
            } catch {
                // Final fallback to basic string copy
                logWarning("All locale processing failed, using basic copy")
                return String(input)
            }
        }
    }
    
    /// ICU-based string processing with error handling
    private static func processWithICU(_ input: String, locale: String) throws -> String {
        // This is where actual ICU operations would go
        // For now, we'll simulate with basic operations that could fail
        
        guard !input.isEmpty else { return input }
        
        // Memory allocation check
        let estimatedMemory = input.count * 4 // UTF-8 worst case
        guard estimatedMemory < 1_000_000 else { // 1MB limit
            throw StringProcessingError.memoryAllocationFailed
        }
        
        // Validate UTF-8 encoding
        guard input.utf8.count > 0 else {
            throw StringProcessingError.invalidEncoding
        }
        
        // Safe string processing simulation
        return input.trimmingCharacters(in: .whitespacesAndNewlines)
    }
    
    // MARK: - Memory-Safe String Utilities
    
    /// Safely get string length with bounds checking
    @objc static func safeStringLength(_ input: String?) -> NSNumber {
        guard let input = input else { return NSNumber(value: 0) }
        
        return autoreleasepool {
            let length = min(input.count, maxStringLength)
            return NSNumber(value: length)
        }
    }
    
    /// Safely substring with bounds checking
    @objc static func safeSubstring(_ input: String?, start: Int, length: Int) -> String? {
        guard let input = input else { return nil }
        guard start >= 0 && length > 0 else { return nil }
        
        return autoreleasepool {
            let safeStart = min(start, input.count)
            let safeLength = min(length, input.count - safeStart)
            
            guard safeLength > 0 else { return "" }
            
            let startIndex = input.index(input.startIndex, offsetBy: safeStart)
            let endIndex = input.index(startIndex, offsetBy: safeLength)
            
            return String(input[startIndex..<endIndex])
        }
    }
    
    // MARK: - Timeout and Memory Management
    
    /// Execute a closure with timeout protection
    private static func performWithTimeout<T>(_ timeout: TimeInterval, operation: @escaping () throws -> T) throws -> T {
        var result: Result<T, Error>?
        let semaphore = DispatchSemaphore(value: 0)
        
        DispatchQueue.global(qos: .userInitiated).async {
            do {
                let value = try operation()
                result = .success(value)
            } catch {
                result = .failure(error)
            }
            semaphore.signal()
        }
        
        if semaphore.wait(timeout: .now() + timeout) == .timedOut {
            throw StringProcessingError.processingTimeout
        }
        
        switch result {
        case .success(let value):
            return value
        case .failure(let error):
            throw error
        case .none:
            throw StringProcessingError.processingTimeout
        }
    }
    
    /// Monitor memory usage during string operations
    @objc static func getMemoryUsage() -> [String: NSNumber] {
        var info = mach_task_basic_info()
        var count = mach_msg_type_number_t(MemoryLayout<mach_task_basic_info>.size)/4
        
        let result: kern_return_t = withUnsafeMutablePointer(to: &info) {
            $0.withMemoryRebound(to: integer_t.self, capacity: 1) {
                task_info(mach_task_self_,
                         task_flavor_t(MACH_TASK_BASIC_INFO),
                         $0,
                         &count)
            }
        }
        
        var memoryInfo: [String: NSNumber] = [:]
        
        if result == KERN_SUCCESS {
            memoryInfo["resident_size"] = NSNumber(value: info.resident_size)
            memoryInfo["virtual_size"] = NSNumber(value: info.virtual_size)
        }
        
        return memoryInfo
    }
    
    // MARK: - Logging and Error Handling
    
    private static func logError(_ message: String) {
        NSLog("🚨 StringProcessingWrapper Error: %@", message)
    }
    
    private static func logWarning(_ message: String) {
        NSLog("⚠️ StringProcessingWrapper Warning: %@", message)
    }
    
    private static func logInfo(_ message: String) {
        NSLog("ℹ️ StringProcessingWrapper Info: %@", message)
    }
    
    // MARK: - React Native Bridge Methods
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

// MARK: - React Native Bridge Extension

extension StringProcessingWrapper {
    
    @objc func safeProcessString(_ input: NSString, 
                                locale: NSString?, 
                                callback: @escaping RCTResponseSenderBlock) {
        
        DispatchQueue.global(qos: .userInitiated).async {
            let result = StringProcessingWrapper.safeLocaleStringProcessing(
                input as String, 
                locale: locale as String?
            )
            
            DispatchQueue.main.async {
                if let result = result {
                    callback([NSNull(), result])
                } else {
                    callback([["error": "String processing failed"], NSNull()])
                }
            }
        }
    }
    
    @objc func getStringProcessingStats(_ callback: @escaping RCTResponseSenderBlock) {
        let memoryInfo = StringProcessingWrapper.getMemoryUsage()
        let stats: [String: Any] = [
            "memory": memoryInfo,
            "max_string_length": NSNumber(value: StringProcessingWrapper.maxStringLength),
            "max_processing_time": NSNumber(value: StringProcessingWrapper.maxProcessingTime)
        ]
        
        callback([NSNull(), stats])
    }
}

// MARK: - C Bridge for Direct Access

@_cdecl("safe_string_copy")
func safe_string_copy(_ input: UnsafePointer<CChar>?) -> UnsafeMutablePointer<CChar>? {
    guard let input = input else { return nil }
    
    let inputString = String(cString: input)
    let result = StringProcessingWrapper.safeStringCopy(inputString) ?? ""
    
    return strdup(result)
}