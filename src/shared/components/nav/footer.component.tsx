import { Box, Link } from "@chakra-ui/react";
import { useTheme } from "shared/hooks/use-theme.hook";
import { theme } from "shared/styles/theme";

export function Footer() {
  const dlTheme = useTheme();

  return (
    <Box
      sx={theme.typography.condensed}
      color={dlTheme.colors.textFaint}
      fontSize={{ base: "xs", md: "sm" }}
      textAlign="center"
      position="absolute"
      bottom={0}
      w="full"
    >
      &copy; {new Date().getFullYear()} - {}
      <Link href="https://github.com/Philosocode" isExternal>
        Tam Le
      </Link>
    </Box>
  );
}
