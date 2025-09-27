import { useEffect, useRef, useState } from 'react';
import { DatabaseService } from '../supabase/supabase';

interface UseRequestStatusPollingOptions {
  requestId: string | null;
  intervalMs?: number;
  onStatusChange?: (status: string) => void;
}

export const useRequestStatusPolling = ({ 
  requestId, 
  intervalMs = 5000,
  onStatusChange 
}: UseRequestStatusPollingOptions) => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId:', requestId);
    
    if (!requestId) {
      console.log('📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling');
      // Clear status when no request ID
      setStatus(null);
      setError(null);
      return;
    }

    console.log('📊 POLLING_HOOK_START: Starting polling for requestId:', requestId);

    const pollStatus = async () => {
      try {
        console.log('📊 POLLING_HOOK_POLL: Polling status for requestId:', requestId);
        const currentStatus = await DatabaseService.getRequestStatus(requestId);
        console.log('📊 POLLING_HOOK_RESULT: Received status:', currentStatus, 'for requestId:', requestId);
        
        setStatus(currentStatus);
        setError(null);
        
        if (onStatusChange && currentStatus) {
          console.log('📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status:', currentStatus);
          onStatusChange(currentStatus);
        }

        // Stop polling when request reaches a final state
        if (currentStatus === 'completed' || currentStatus === 'failed' || currentStatus === 'cancelled') {
          console.log('📊 POLLING_HOOK_FINAL: Final status reached:', currentStatus, 'stopping polling');
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            console.log('📊 POLLING_HOOK_STOPPED: Polling interval cleared');
          }
        }
      } catch (err) {
        console.error('📊 POLLING_HOOK_ERROR: Error polling status for requestId:', requestId, 'error:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch request status'));
      }
    };

    // Add small delay before starting initial poll to allow state to stabilize
    console.log('📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay');
    initialDelayRef.current = setTimeout(() => {
      pollStatus();

      // Set up interval for subsequent polls
      console.log('📊 POLLING_HOOK_INTERVAL: Setting up polling interval:', intervalMs, 'ms');
      intervalRef.current = setInterval(pollStatus, intervalMs);
    }, 150);

    // Cleanup on unmount or when requestId changes
    return () => {
      console.log('📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId:', requestId);
      if (initialDelayRef.current) {
        clearTimeout(initialDelayRef.current);
        initialDelayRef.current = null;
        console.log('📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared');
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log('📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup');
      }
    };
  }, [requestId, intervalMs, onStatusChange]);

  return { status, error };
};