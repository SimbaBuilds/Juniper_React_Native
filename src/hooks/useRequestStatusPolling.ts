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

  useEffect(() => {
    if (!requestId) {
      // Clear status when no request ID
      setStatus(null);
      setError(null);
      return;
    }

    const pollStatus = async () => {
      try {
        const currentStatus = await DatabaseService.getRequestStatus(requestId);
        setStatus(currentStatus);
        setError(null);
        
        if (onStatusChange && currentStatus) {
          onStatusChange(currentStatus);
        }

        // Stop polling when request reaches a final state
        if (currentStatus === 'completed' || currentStatus === 'failed' || currentStatus === 'cancelled') {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      } catch (err) {
        console.error('📊 POLLING_HOOK: Error polling status:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch request status'));
      }
    };

    // Initial poll
    pollStatus();

    // Set up interval for subsequent polls
    intervalRef.current = setInterval(pollStatus, intervalMs);

    // Cleanup on unmount or when requestId changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [requestId, intervalMs, onStatusChange]);

  return { status, error };
};