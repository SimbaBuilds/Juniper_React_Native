export const isCancellationError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') return false;
  
  const err = error as any;
  return (
    err.name === 'CanceledError' ||
    err.message?.includes('canceled') ||
    err.message?.includes('cancelled') ||
    err.message === 'Request was cancelled'
  );
}; 