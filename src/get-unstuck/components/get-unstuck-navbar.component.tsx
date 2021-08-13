import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { IconButton } from "shared/components/icon-button.component";

export function GetUnstuckNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <AppNavbar
      leftSlot={
        <Link to={redirectUrl}>
          <IconButton aria-label="Go Back" icon={<IoMdReturnLeft />} />
        </Link>
      }
      rightSlot={
        <>
          <ToggleThemeButton />
        </>
      }
    />
  );
}
