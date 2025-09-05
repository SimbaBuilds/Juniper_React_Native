const { withXcodeProject } = require('@expo/config-plugins');
const path = require('path');
const fs = require('fs');

/**
 * Expo plugin to ensure VoiceModule native files are included in the iOS build
 */
module.exports = function withVoiceModule(config) {
  return withXcodeProject(config, (config) => {
    const project = config.modResults;
    
    // List of native files to include
    const nativeFiles = [
      'VoiceModule.swift',
      'VoiceModule.m',
      'VoiceManager.swift',
      'VoiceState.swift',
      'AudioManager.swift',
      'TTSManager.swift',
      'DeepgramAPI.swift',
      'DeepgramSTTProvider.swift',
      'DeepgramWebSocketClient.swift',
      'WhisperAPI.swift',
      'STTProvider.swift',
      'ConfigManager.swift',
      'AppConfigModule.swift',
      'AppConfigModule.m',
      'StringProcessingWrapper.swift',
      'StringProcessingWrapper.m',
    ];
    
    // Get the main group
    const mainGroup = project.getFirstProject().firstProject.mainGroup;
    const groups = project.getPBXGroupByKey(mainGroup);
    
    // Find or create MobileJarvisNative group
    let appGroup = null;
    for (const child of groups.children) {
      const group = project.getPBXGroupByKey(child.value);
      if (group && group.name === 'MobileJarvisNative') {
        appGroup = child.value;
        break;
      }
    }
    
    if (!appGroup) {
      console.log('MobileJarvisNative group not found, skipping file addition');
      return config;
    }
    
    // Add files to the project
    nativeFiles.forEach((filename) => {
      const filePath = `MobileJarvisNative/${filename}`;
      
      try {
        // Check if file already exists in build files
        const existingBuildFile = project.pbxBuildFileSection();
        const fileExists = Object.values(existingBuildFile).some(buildFile => 
          buildFile.fileRef_comment === filename
        );
        
        if (!fileExists) {
          console.log(`Adding ${filename} to Xcode project`);
          
          // Add file to project
          const file = project.addSourceFile(filePath, {}, appGroup);
          
          // Add to build phase if it's a source file
          if (filename.endsWith('.swift') || filename.endsWith('.m')) {
            project.addToPbxBuildFileSection(file);
            project.addToPbxSourcesBuildPhase(file);
          }
        } else {
          console.log(`${filename} already exists in project, skipping`);
        }
      } catch (error) {
        console.log(`Failed to add ${filename}: ${error.message}`);
      }
    });
    
    return config;
  });
};