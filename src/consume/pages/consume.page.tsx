import { Box, HStack, Icon } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { MaterialData } from "consume/components/material-data.component";
import { GoSlowly } from "consume/components/go-slowly.component";
import { StartTimer } from "consume/components/start-timer.component";
import { Skim } from "consume/components/skim.component";
import { ViewSummary } from "consume/components/view-summary.component";
import { Practice } from "consume/components/practice.component";
import { PreStudySummarize } from "consume/components/pre-study-summarize.component";
import { Study } from "consume/components/study.component";
import { PostStudySummarize } from "consume/components/post-study-summarize.component";
import { SummaryScreen } from "consume/components/summary-screen.component";
import {
  selectConsumeState,
  selectStep,
} from "consume/logic/consume.selectors";
import { AiFillStar } from "react-icons/ai";

const steps = [
  <MaterialData />,
  <GoSlowly />,
  <StartTimer />,
  <Skim />,
  <ViewSummary />,
  <Practice />,
  <PreStudySummarize />,
  <Study />,
  <PostStudySummarize />,
  <SummaryScreen />,
];

export function ConsumePage() {
  const { step, studyBlockCount } = useAppSelector(selectConsumeState);

  return (
    <div>
      <HStack as="nav" justify="flex-end">
        <Box
          bg="green.500"
          color="white"
          d="flex"
          p={3}
          alignItems="center"
          rounded="xl"
          shadow="md"
          className="study-block-count"
        >
          <Box fontSize="xl" fontWeight="medium">
            {studyBlockCount}
          </Box>
          <Icon as={AiFillStar} h={6} w={6} ml={1} />
        </Box>
      </HStack>
      <div>{steps[step - 1]}</div>
    </div>
  );
}
