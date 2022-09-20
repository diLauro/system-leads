import axios from "axios";
import { useEffect, useState } from "react";
import { Domains } from "../types/Domains";

export function useFetchDomains(listDomain: Array<string>) {
  const request = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
  });

  const [domains, setDomains] = useState<Domains[] | null>(null)
  const [errorDomains, setErrorDomains] = useState<Error | null>(null);
  const [isLoadingDomains, setIsLoadingDomains] = useState<boolean>(false);

  async function getDomanins() {
    setIsLoadingDomains(false);

    const listRequest: Array<any> = [];
    const responseDomain: Domains | any = {};

    listDomain.forEach((item, index) => {
      listRequest[index] = request
        .get(`domains/type/${item}`)
        .then((response) => {
          return response.data;
        })
        .then((res) => {
          responseDomain[item] = res;
        })
        .catch((err) => {
          setErrorDomains(err);
        });
    });

    await Promise.all([...listRequest])
      .then(() => {
        setDomains({ ...responseDomain });
      })
      .finally(() => {
        setIsLoadingDomains(false);
      });

    setIsLoadingDomains(true);
  }

  useEffect(() => {
    getDomanins();
  }, []);

  return { domains, setDomains, errorDomains, isLoadingDomains };
}
