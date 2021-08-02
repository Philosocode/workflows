import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  onClick: () => void;
  hook: string;
}
export function HookSelectGridItem(props: IProps) {
  const styles = {
    bg: useColorModeValue("gray.100", "gray.600"),
    hoverBg: useColorModeValue("green.500", "gray.500"),
  };

  return (
    <GridItem key={props.hook}>
      <Box
        bg={styles.bg}
        cursor="pointer"
        h="100%"
        py={3}
        px={5}
        fontWeight="medium"
        rounded="md"
        onClick={props.onClick}
        _hover={{ bg: styles.hoverBg, color: "white" }}
      >
        {props.hook}
      </Box>
    </GridItem>
  );
}
