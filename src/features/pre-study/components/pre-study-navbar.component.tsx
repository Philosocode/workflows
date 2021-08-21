import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { IoMdExit } from "react-icons/io";

export function PreStudyNavbar() {
  const [goBackOpen, toggleGoBack] = useToggle();
  const redirectUrl = useAppSelector(selectRedirectUrl);
  useSetRedirectUrl();

  return (
    <>
      <AppNavbar
        leftSlot={[
          { text: "Exit Workflow", icon: <IoMdExit />, onClick: toggleGoBack },
        ]}
      />
      <GoBackModal
        isOpen={goBackOpen}
        handleClose={toggleGoBack}
        redirectUrl={redirectUrl}
      />
    </>
  );
}
