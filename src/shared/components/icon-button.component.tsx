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
  const [isSmall, isMedium] = useMediaQuery([
    `(max-width: ${theme.breakpoints.sm})`,
    `(max-width: ${theme.breakpoints.md})`,
  ]);

  let size = "lg";
  if (isMedium) size = "md";
  if (isSmall) size = "sm";

  return (
    <IconButtonChakra
      variant="ghost"
      size={size}
      fontSize={{ base: 20, md: 24 }}
      _hover={{ color }}
      {...props}
    />
  );
}
