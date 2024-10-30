import { useState } from 'react';


export function useControlledFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return { data, error, isLoading };
}

export default useControlledFetch;
