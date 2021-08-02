import { GetMaterialData } from "consume/steps/get-material-data.component";
import { PracticeReminder } from "consume/steps/practice-reminder.component";
import { SkimReminder } from "consume/steps/skim-reminder.component";
import { SlowReminder } from "consume/steps/slow-reminder.component";
import { StudySummarize } from "consume/steps/study-summarize.component";
import { StudyTimer } from "consume/steps/study-timer.component";
import { Study } from "consume/steps/study.component";
import { SummaryReminder } from "consume/steps/summary-reminder.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { TimerReminder } from "consume/steps/timer-reminder.component";
import { Route, RouteProps } from "react-router-dom";

const _consumeRoutes = [
  { component: GetMaterialData },
  { component: SlowReminder },
  { component: TimerReminder },
  { component: SkimReminder },
  { component: SummaryReminder },
  { component: PracticeReminder },
  {
    render: (props: RouteProps) => (
      <StudySummarize
        {...props}
        message="Summarize everything you've learned so far. Try to do it from memory, without looking at the material."
      />
    ),
  },
  { component: StudyTimer },
  { component: Study },
  {
    render: (props: RouteProps) => (
      <StudySummarize
        {...props}
        message="Summarize everything you've learned during this study block. Try to do it from memory, without looking at the material."
      />
    ),
  },
  { component: SummaryScreen },
];

export const consumeRoutes = _consumeRoutes.map((route, index) => (
  <Route {...route} exact path={`/consume/${index + 1}`} />
));

export const CONSUME_PAGE_NUMBERS = {
  STUDY: _consumeRoutes.findIndex((route) => route.component === Study) + 1,
};
