import { Link as LinkChakra, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
  href: string;

  color?: string;
  isExternal?: boolean;
}
export function Link(props: IProps) {
  const color = useColorModeValue("green.500", "green.200");

  return (
    <LinkChakra
      color={props.color ?? color}
      href={props.href}
      isExternal={props.isExternal ?? true}
    >
      {props.children}
    </LinkChakra>
  );
}
