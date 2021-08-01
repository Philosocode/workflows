import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";

import { GetMaterialData } from "consume/steps/get-material-data.component";
import { SlowReminder } from "consume/steps/slow-reminder.component";
import { TimerReminder } from "consume/steps/timer-reminder.component";
import { SkimReminder } from "consume/steps/skim-reminder.component";
import { SummaryReminder } from "consume/steps/summary-reminder.component";
import { PracticeReminder } from "consume/steps/practice-reminder.component";
import { Study } from "consume/steps/study.component";
import { StudySummarize } from "consume/steps/study-summarize.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { ConsumeNav } from "consume/components/consume-nav.component";

const steps = [
  <GetMaterialData />,
  <SlowReminder />,
  <TimerReminder />,
  <SkimReminder />,
  <SummaryReminder />,
  <PracticeReminder />,
  <StudySummarize message="Summarize everything you've learned so far. Try to do it from memory, without looking at the material." />,
  <Study />,
  <StudySummarize message="Summarize everything you've learned in this study block. Try to do it from memory, without looking at the material." />,
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
