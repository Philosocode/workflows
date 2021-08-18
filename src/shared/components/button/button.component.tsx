import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

export interface IProps extends ButtonProps {
  children: React.ReactNode;
}
export function Button(props: IProps) {
  return (
    <ButtonChakra
      colorScheme="gray"
      sx={theme.typography.condensed}
      fontSize={theme.typography.fontSize.button}
      minW={{ base: 15, sm: 20 }}
      py={{ base: 3, md: 5 }}
      {...props}
    />
  );
}
