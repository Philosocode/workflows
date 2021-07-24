import { Button as ButtonBase } from "@chakra-ui/react";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: "green" | "red" | "gray";
}
export function Button({ color, children, ...rest }: IProps) {
  return (
    <ButtonBase {...rest} colorScheme={color}>
      {children}
    </ButtonBase>
  );
}
