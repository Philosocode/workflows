import { Link as LinkChakra } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
  href: string;

  color?: string;
  isExternal?: boolean;
}
export function Link(props: IProps) {
  return (
    <LinkChakra
      color={props.color ?? "green.500"}
      href={props.href}
      isExternal={props.isExternal ?? true}
    >
      {props.children}
    </LinkChakra>
  );
}
