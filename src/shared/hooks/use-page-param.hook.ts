import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function usePageParam(callback: (page: number) => void) {
  const params = useParams<{ pageNumber?: string }>();

  // whenever page number param changes, run the callback
  useEffect(() => {
    if (params.pageNumber) {
      const pageParam = Number.parseInt(params.pageNumber);
      let pageNumber = pageParam;

      if (typeof pageNumber === "number") {
        callback(pageNumber);
      }
    }
    // eslint-disable-next-line
  }, [params]);
}
