import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";

import { GetMaterialData } from "consume/steps/get-material-data.component";
import { SlowReminder } from "consume/steps/slow-reminder.component";
import { TimerReminder } from "consume/steps/timer-reminder.component";
import { SkimReminder } from "consume/steps/skim-reminder.component";
import { SummaryReminder } from "consume/steps/summary-reminder.component";
import { PracticeReminder } from "consume/steps/practice-reminder.component";
import { PreStudySummarize } from "consume/steps/pre-study-summarize.component";
import { Study } from "consume/steps/study.component";
import { PostStudySummarize } from "consume/steps/post-study-summarize.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { ConsumeNav } from "consume/components/consume-nav.component";

const steps = [
  <GetMaterialData />,
  <SlowReminder />,
  <TimerReminder />,
  <SkimReminder />,
  <SummaryReminder />,
  <PracticeReminder />,
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
