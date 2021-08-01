import { Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";

export function StudyBlockCounter() {
  const { studyBlockCount } = useAppSelector(selectConsumeState);

  const bg = useColorModeValue("green.500", "green.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={bg}
      color={color}
      d="flex"
      px={3}
      py={2}
      alignItems="center"
      rounded="lg"
      shadow="md"
      className="study-block-count"
    >
      <Box fontSize="xl" fontWeight="medium">
        {studyBlockCount}
      </Box>
      <Icon as={AiFillStar} boxSize={5} ml={1} />
    </Box>
  );
}
