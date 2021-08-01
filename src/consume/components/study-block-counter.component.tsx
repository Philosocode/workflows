import { Box, Icon } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";

export function StudyBlockCounter() {
  const { studyBlockCount } = useAppSelector(selectConsumeState);

  return (
    <Box
      bg="green.500"
      color="white"
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
