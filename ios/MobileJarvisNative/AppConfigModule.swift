//
//  AppConfigModule.swift
//  MobileJarvisNative
//

import Foundation
import React

@objc(AppConfigModule)
class AppConfigModule: NSObject {
    
    // MARK: - Server API Configuration
    
    @objc
    func getServerApiConfig(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let config = ConfigManager.shared.getServerApiConfig()
        resolve([
            "baseUrl": config.baseUrl,
            "apiEndpoint": config.apiEndpoint
        ])
    }
    
    @objc
    func updateServerApiConfig(_ baseUrl: String, apiEndpoint: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let updated = ConfigManager.shared.updateServerApiConfig(baseUrl: baseUrl, apiEndpoint: apiEndpoint)
        resolve(updated)
    }
    
    // MARK: - Full App Configuration
    
    @objc
    func getAppConfig(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let serverConfig = ConfigManager.shared.getServerApiConfig()
        let apiKeys = ConfigManager.shared.getApiKeys()
        
        let config: [String: Any] = [
            "serverApi": [
                "baseUrl": serverConfig.baseUrl,
                "apiEndpoint": serverConfig.apiEndpoint
            ],
            "apiKeys": [
                "picovoice": apiKeys.picovoice ?? "",
                "openai": apiKeys.openai ?? "",
                "deepgram": apiKeys.deepgram ?? "",
                "elevenlabs": apiKeys.elevenlabs ?? ""
            ]
        ]
        
        resolve(config)
    }
    
    // MARK: - React Native Requirements
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
}