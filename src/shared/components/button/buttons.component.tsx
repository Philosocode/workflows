import { ReactNode } from "react";
import { ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";

interface IProps extends ButtonGroupProps {
  children: ReactNode;
}
export function Buttons(props: IProps) {
  return <ButtonGroup spacing={{ base: 4, md: 5 }} {...props} />;
}
