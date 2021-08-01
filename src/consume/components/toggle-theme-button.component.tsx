import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

import { IconButton } from "shared/components/icon-button.component";

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;

  return (
    <IconButton
      aria-label="Toggle Theme"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
}
