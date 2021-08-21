import {
  IconButton as IconButtonChakra,
  IconButtonProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps extends IconButtonProps {}
export function IconButton(props: IProps) {
  const color = useColorModeValue("green.500", "green.200");
  const iconSize = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <IconButtonChakra
      variant="ghost"
      size={iconSize}
      fontSize={{ base: "xl", md: "2xl" }}
      _hover={{ color }}
      {...props}
    />
  );
}
