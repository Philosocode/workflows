import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { setStep } from "consume/redux/consume.slice";
import { consumeRoutes } from "consume/routes/consume.routes";

import { ConsumeNav } from "consume/components/consume-nav.component";

export function ConsumePage() {
  const params = useParams<{ pageNumber: string }>();
  const dispatch = useAppDispatch();

  // whenever page number param changes, set it
  useEffect(() => {
    if (params.pageNumber) {
      const pageParam = Number.parseInt(params.pageNumber);
      let pageNumber = pageParam;

      if (
        typeof pageNumber !== "number" ||
        pageNumber < 1 ||
        pageNumber > consumeRoutes.length + 1
      ) {
        pageNumber = 1;
      }

      dispatch(setStep(pageNumber));
    }
  }, [dispatch, params]);

  return <ConsumeNav />;
}
