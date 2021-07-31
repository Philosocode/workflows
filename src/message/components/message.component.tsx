import { Box } from "@chakra-ui/react";

export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  return (
    <Box
      bg="white"
      mx="auto"
      mb={8}
      maxW="full"
      rounded="lg"
      shadow="lg"
      p={8}
      fontSize="3xl"
    >
      {props.children}
    </Box>
  );
}
