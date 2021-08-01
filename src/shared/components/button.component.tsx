import { Button as ButtonBase, ButtonProps } from "@chakra-ui/react";

type TButtonColor = "green" | "red" | "gray";
export interface IProps extends ButtonProps {
  children: React.ReactNode;

  color?: TButtonColor;
}
export function Button({ color, children, ...rest }: IProps) {
  return (
    <ButtonBase colorScheme={color ?? "green"} minW={20} {...rest}>
      {children}
    </ButtonBase>
  );
}
