import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";

import { GetMaterialData } from "consume/steps/get-material-data.component";
import { GoSlowly } from "consume/steps/go-slowly.component";
import { StartTimer } from "consume/steps/start-timer.component";
import { Skim } from "consume/steps/skim.component";
import { ViewSummary } from "consume/steps/view-summary.component";
import { Practice } from "consume/steps/practice.component";
import { PreStudySummarize } from "consume/steps/pre-study-summarize.component";
import { Study } from "consume/steps/study.component";
import { PostStudySummarize } from "consume/steps/post-study-summarize.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { ConsumeNav } from "consume/components/consume-nav.component";

const steps = [
  <GetMaterialData />,
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
  const step = useAppSelector(selectStep);

  return (
    <Box>
      <ConsumeNav />
      <Box>{steps[step - 1]}</Box>
    </Box>
  );
}
