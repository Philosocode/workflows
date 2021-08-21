import { IconType } from "react-icons";
import { Box, Icon } from "@chakra-ui/react";

import { useTheme } from "shared/hooks/use-theme.hook";

interface IProps {
  count: number;
  icon?: IconType;
}
export function BlockCounter(props: IProps) {
  const dlTheme = useTheme();

  return (
    <Box
      bg={dlTheme.colors.green}
      color={dlTheme.colors.textInverse}
      d="flex"
      px="0.6em"
      py="0.25em"
      fontSize={{ base: "sm", sm: "md", md: "lg" }}
      alignItems="center"
      rounded="lg"
      shadow="md"
    >
      {props.icon && <Icon as={props.icon} fontSize="md" mr={1.5} />}
      <Box fontWeight={500}>{props.count}</Box>
    </Box>
  );
}
