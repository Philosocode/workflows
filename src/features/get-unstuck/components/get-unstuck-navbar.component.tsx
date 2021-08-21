import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function GetUnstuckNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return <AppNavbar exitUrl={redirectUrl} />;
}
