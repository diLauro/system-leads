import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchAll<T>(endpoint: string) {
  const request = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
  });

  const [dataList, setDataList] = useState<T | any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getDomanins() {
    setIsLoading(false);
    await request
      .get(`${endpoint}`)
      .then((response) => {
        setDataList(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getDomanins();
  }, []);

  return { dataList, setDataList, error, isLoading };
}
