import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { useLocationStore } from "features/location/location.store";

export function GetUnstuckNavbar() {
  const { redirectUrl } = useLocationStore();

  return <AppNavbar exitUrl={redirectUrl} />;
}
