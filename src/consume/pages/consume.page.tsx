// import { useAppSelector } from "app/hooks";
import { MaterialData } from "consume/components/material-data.component";
import { GoSlowly } from "consume/components/go-slowly.component";
import { StartTimer } from "consume/components/start-timer.component";
import { Skim } from "consume/components/skim.component";
import { ViewSummary } from "consume/components/view-summary.component";
import { Practice } from "consume/components/practice.component";
import { PreStudySummarize } from "consume/components/pre-study-summarize.component";
import { Study } from "consume/components/study.component";
// import { PostStudySummarize } from "consume/components/post-study-summarize.component";

const steps = [
  <MaterialData />,
  <GoSlowly />,
  <StartTimer />,
  <Skim />,
  <ViewSummary />,
  <Practice />,
  <PreStudySummarize />,
  <Study />,
  // <PostStudySummarize />,
];

export function ConsumePage() {
  // const step = useAppSelector((state) => state.consume.step);

  return <div>{steps[steps.length - 1]}</div>;
}
