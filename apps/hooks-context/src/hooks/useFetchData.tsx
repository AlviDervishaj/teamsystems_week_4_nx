import { useState, useEffect, useRef } from 'react';

interface UseFetchWithAbortOptions<T> {
  url: string;
  initialData?: T;
}

export function useFetchWithAbort<T>(options: UseFetchWithAbortOptions<T>) {
  const { url, initialData } = options;
  const [data, setData] = useState<T | null>(initialData || null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          console.log('Request aborted');
        } else {
          setError(error as Error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
    };
  }, [url]);

  return { data, error, isLoading };
}
