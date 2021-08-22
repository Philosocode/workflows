import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";
import { useLocationStore } from "features/location/location.store";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function PreStudyNavbar() {
  const { redirectUrl } = useLocationStore();
  useSetRedirectUrl();

  return <AppNavbar exitUrl={redirectUrl} />;
}
