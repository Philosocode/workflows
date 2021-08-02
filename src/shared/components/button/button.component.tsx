import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

export interface IProps extends ButtonProps {
  children: React.ReactNode;
}
export function Button({ color, children, ...rest }: IProps) {
  return (
    <ButtonChakra colorScheme="green" minW={20} {...rest}>
      {children}
    </ButtonChakra>
  );
}
