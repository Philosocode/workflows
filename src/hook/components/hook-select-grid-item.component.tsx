import { Box, GridItem } from "@chakra-ui/react";

interface IProps {
  onClick: () => void;
  hook: string;
}
export function HookSelectGridItem(props: IProps) {
  return (
    <GridItem key={props.hook}>
      <Box
        bg="gray.100"
        cursor="pointer"
        h="100%"
        py={3}
        px={5}
        fontWeight="medium"
        rounded="md"
        onClick={props.onClick}
        _hover={{ bg: "green.500", color: "white" }}
      >
        {props.hook}
      </Box>
    </GridItem>
  );
}
