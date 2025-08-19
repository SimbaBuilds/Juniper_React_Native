package expo.modules

import org.gradle.api.Plugin
import org.gradle.api.Project
import java.io.File

class ExpoModulePlugin : Plugin<Project> {
  override fun apply(project: Project) {
    // Find the correct path to the expo-modules-core plugin
    val possiblePaths = listOf(
      File(project.rootProject.projectDir.parentFile, "node_modules/expo-modules-core/android/ExpoModulesCorePlugin.gradle"),
      File(project.rootProject.projectDir, "node_modules/expo-modules-core/android/ExpoModulesCorePlugin.gradle"),
      File(project.projectDir.parentFile, "node_modules/expo-modules-core/android/ExpoModulesCorePlugin.gradle")
    )
    
    val corePluginFile = possiblePaths.find { it.exists() }
    
    if (corePluginFile != null) {
      project.apply(mapOf("from" to corePluginFile))
      
      // Call the applyKotlinExpoModulesCorePlugin function from the core plugin
      try {
        val applyFunction = project.extensions.extraProperties.get("applyKotlinExpoModulesCorePlugin") as groovy.lang.Closure<*>
        applyFunction.call()
      } catch (e: Exception) {
        // If the function doesn't exist or fails, just continue
        project.logger.warn("Could not apply applyKotlinExpoModulesCorePlugin: ${e.message}")
      }
      
      // Call useCoreDependencies if it exists
      try {
        val depsFunction = project.extensions.extraProperties.get("useCoreDependencies") as groovy.lang.Closure<*>
        depsFunction.call()
      } catch (e: Exception) {
        // If the function doesn't exist or fails, just continue
        project.logger.warn("Could not apply useCoreDependencies: ${e.message}")
      }
    } else {
      project.logger.warn("Could not find ExpoModulesCorePlugin.gradle file")
    }
  }
}