import { Box, HStack, Icon } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

import { useAppSelector } from "shared/redux/store";
import { MaterialData } from "consume/steps/material-data.component";
import { GoSlowly } from "consume/steps/go-slowly.component";
import { StartTimer } from "consume/steps/start-timer.component";
import { Skim } from "consume/steps/skim.component";
import { ViewSummary } from "consume/steps/view-summary.component";
import { Practice } from "consume/steps/practice.component";
import { PreStudySummarize } from "consume/steps/pre-study-summarize.component";
import { Study } from "consume/steps/study.component";
import { PostStudySummarize } from "consume/steps/post-study-summarize.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";

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
    <Box>
      <HStack as="nav" justify="space-between" mb={10}>
        <HStack spacing={5}>
          <RandoHookModal />
          <GetUnstuckModal />
        </HStack>
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
      </HStack>
      <div>{steps[step - 1]}</div>
    </Box>
  );
}
