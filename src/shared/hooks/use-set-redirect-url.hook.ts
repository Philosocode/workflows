import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useLocationStore } from "features/location/location.store";

export function useSetRedirectUrl() {
  const location = useLocation<{ from: string }>();
  const { setRedirectUrl } = useLocationStore();

  useEffect(() => {
    if (location.state?.from) {
      setRedirectUrl(location.state?.from);
    }
    // eslint-disable-next-line
  }, [location.state]);
}
