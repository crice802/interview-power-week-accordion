import { useEffect } from "react";

export const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
    .then(res => res.json)
  }, [url])
}