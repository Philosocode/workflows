import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function PreStudyNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);
  useSetRedirectUrl();

  return <AppNavbar exitUrl={redirectUrl} />;
}
