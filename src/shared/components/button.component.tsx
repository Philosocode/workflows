import { Button as ButtonBase, ButtonProps } from "@chakra-ui/react";

export interface IProps extends ButtonProps {
  children: React.ReactNode;
  color: "green" | "red" | "gray";
}
export function Button({ color, children, ...rest }: IProps) {
  return (
    <ButtonBase {...rest} colorScheme={color} minWidth="5rem">
      {children}
    </ButtonBase>
  );
}
