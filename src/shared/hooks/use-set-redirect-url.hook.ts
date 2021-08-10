import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { setRedirectUrl } from "step/step.slice";

export function useSetRedirectUrl() {
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();

  useEffect(() => {
    if (location.state?.from) {
      dispatch(setRedirectUrl(location.state?.from));
    }
  }, [dispatch, location.state]);
}
