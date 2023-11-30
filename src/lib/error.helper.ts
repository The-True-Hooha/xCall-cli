interface errorMapper {
  statusCode: number;
  error: string;
  message: Record<string, any>;
}

export function customErrorHelper(error: any): errorMapper {
  const statusCode = error?.status || 500;
  const errorMessage =
    error?.message || error?.error || error || 'unknown error occurred';
  const message: Record<string, any> = {
    cause: error,
    timeStamp: new Date().toISOString(),
  };
  return {
    statusCode,
    error: errorMessage,
    message,
  };
}
