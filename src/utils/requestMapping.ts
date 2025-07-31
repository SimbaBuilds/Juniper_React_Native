/**
 * Service to manage mapping between React Native request IDs and native request IDs
 * This is needed because when React Native cancels a request, it needs to also cancel
 * the corresponding native request to prevent timeout messages.
 */
class RequestMappingService {
  private reactToNativeMap: Map<string, string> = new Map();
  private nativeToReactMap: Map<string, string> = new Map();

  /**
   * Store the mapping between React Native request ID and native request ID
   */
  public mapRequestIds(reactNativeRequestId: string, nativeRequestId: string): void {
    console.log(`🔗 REQUEST_MAPPING: Mapping RN ID '${reactNativeRequestId}' to native ID '${nativeRequestId}'`);
    
    // Store bidirectional mapping
    this.reactToNativeMap.set(reactNativeRequestId, nativeRequestId);
    this.nativeToReactMap.set(nativeRequestId, reactNativeRequestId);
  }

  /**
   * Get native request ID from React Native request ID
   */
  public getNativeRequestId(reactNativeRequestId: string): string | null {
    const nativeId = this.reactToNativeMap.get(reactNativeRequestId);
    console.log(`🔗 REQUEST_MAPPING: RN ID '${reactNativeRequestId}' maps to native ID '${nativeId || 'not found'}'`);
    return nativeId || null;
  }

  /**
   * Get React Native request ID from native request ID
   */
  public getReactNativeRequestId(nativeRequestId: string): string | null {
    const reactId = this.nativeToReactMap.get(nativeRequestId);
    console.log(`🔗 REQUEST_MAPPING: Native ID '${nativeRequestId}' maps to RN ID '${reactId || 'not found'}'`);
    return reactId || null;
  }

  /**
   * Remove mapping for both IDs when request completes or is cancelled
   */
  public removeMapping(reactNativeRequestId: string): void {
    const nativeId = this.reactToNativeMap.get(reactNativeRequestId);
    if (nativeId) {
      console.log(`🔗 REQUEST_MAPPING: Removing mapping for RN ID '${reactNativeRequestId}' and native ID '${nativeId}'`);
      this.reactToNativeMap.delete(reactNativeRequestId);
      this.nativeToReactMap.delete(nativeId);
    } else {
      console.log(`🔗 REQUEST_MAPPING: No mapping found to remove for RN ID '${reactNativeRequestId}'`);
    }
  }

  /**
   * Remove mapping by native request ID
   */
  public removeMappingByNativeId(nativeRequestId: string): void {
    const reactId = this.nativeToReactMap.get(nativeRequestId);
    if (reactId) {
      console.log(`🔗 REQUEST_MAPPING: Removing mapping for native ID '${nativeRequestId}' and RN ID '${reactId}'`);
      this.nativeToReactMap.delete(nativeRequestId);
      this.reactToNativeMap.delete(reactId);
    } else {
      console.log(`🔗 REQUEST_MAPPING: No mapping found to remove for native ID '${nativeRequestId}'`);
    }
  }

  /**
   * Clear all mappings (useful for debugging or cleanup)
   */
  public clearAllMappings(): void {
    const reactCount = this.reactToNativeMap.size;
    const nativeCount = this.nativeToReactMap.size;
    this.reactToNativeMap.clear();
    this.nativeToReactMap.clear();
    console.log(`🔗 REQUEST_MAPPING: Cleared all mappings (${reactCount} react, ${nativeCount} native)`);
  }

  /**
   * Get current mapping stats for debugging
   */
  public getMappingStats(): { reactToNative: number; nativeToReact: number } {
    return {
      reactToNative: this.reactToNativeMap.size,
      nativeToReact: this.nativeToReactMap.size
    };
  }
}

// Export singleton instance
export default new RequestMappingService();