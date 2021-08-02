import { useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import { IconButton } from "shared/components/icon-button.component";

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "dark" ? <FaSun /> : <FaMoon />;

  return (
    <IconButton
      aria-label="Toggle Theme"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
}
