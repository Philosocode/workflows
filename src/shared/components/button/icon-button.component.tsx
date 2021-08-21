import {
  IconButton as IconButtonChakra,
  IconButtonProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps extends IconButtonProps {
  hoverColor?: string;
}
export function IconButton({ hoverColor = "green", ...rest }: IProps) {
  const color = useColorModeValue(`${hoverColor}.500`, `${hoverColor}.200`);
  const iconSize = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <IconButtonChakra
      variant="ghost"
      size={iconSize}
      fontSize={{ base: "xl", md: "2xl" }}
      _hover={{ color }}
      {...rest}
    />
  );
}
