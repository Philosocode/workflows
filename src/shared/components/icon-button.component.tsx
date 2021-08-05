import {
  IconButton as IconButtonChakra,
  IconButtonProps,
  theme,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

interface IProps extends IconButtonProps {}
export function IconButton(props: IProps) {
  const color = useColorModeValue("green.500", "green.200");
  const [isSmall] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  let size = isSmall ? "xs" : "lg";

  return (
    <IconButtonChakra
      variant="ghost"
      size={size}
      fontSize={{ base: 18, sm: 24 }}
      _hover={{ color }}
      {...props}
    />
  );
}
