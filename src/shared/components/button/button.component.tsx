import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

export interface IProps extends ButtonProps {
  children: React.ReactNode;
}
export function Button({ color, children, ...rest }: IProps) {
  return (
    <ButtonChakra
      colorScheme="gray"
      sx={theme.typography.condensed}
      fontSize={theme.typography.fontSize.nextButton}
      minW={20}
      {...rest}
    >
      {children}
    </ButtonChakra>
  );
}
