import {
  IconButton as IconButtonChakra,
  IconButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps extends IconButtonProps {}
export function IconButton(props: IProps) {
  const color = useColorModeValue("green.500", "green.200");

  return (
    <IconButtonChakra
      variant="ghost"
      size="lg"
      fontSize={24}
      _hover={{ color }}
      {...props}
    />
  );
}
