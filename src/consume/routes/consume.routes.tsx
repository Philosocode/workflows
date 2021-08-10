import { Redirect, RouteProps } from "react-router-dom";

import { StudyMenu } from "consume/components/study-menu.component";
import { ConsumeFinish } from "consume/steps/consume-finish.component";
import { ConsumeSetup } from "consume/steps/consume-setup.component";
import { PracticeReminder } from "consume/steps/practice-reminder.component";
import { SkimReminder } from "consume/steps/skim-reminder.component";
import { SlowReminder } from "consume/steps/slow-reminder.component";
import { StudySummarize } from "consume/steps/study-summarize.component";
import { StudyTimer } from "consume/steps/study-timer.component";
import { Study } from "consume/steps/study.component";
import { SummaryReminder } from "consume/steps/summary-reminder.component";
import { SummaryScreen } from "consume/steps/summary-screen.component";
import { CreateNotes } from "consume/steps/create-notes.component";
import { StudyFooter } from "consume/components/study-footer.component";
import { CreateHooks } from "consume/steps/create-hooks.component";

export const consumeRoutes = [
  { component: ConsumeSetup },
  { component: SlowReminder },
  { component: SkimReminder },
  { component: SummaryReminder },
  { component: PracticeReminder },
  { component: StudyTimer },
  {
    render: () => (
      <>
        <CreateNotes />
        <StudyFooter />
      </>
    ),
  },
  {
    render: () => (
      <>
        <CreateHooks />
        <StudyFooter />
      </>
    ),
  },
  { component: Study },
  {
    render: (props: RouteProps) => (
      <StudySummarize
        {...props}
        message="Summarize everything you've learned during this study block.
        Try to do it from memory, without looking at the material."
      />
    ),
  },
  { component: SummaryScreen },
  { component: ConsumeFinish },

  // catch-all
  { path: "/consume", render: () => <Redirect to="/consume/1" /> },
];

export const CONSUME_PAGE_NUMBERS = {
  STUDY: consumeRoutes.findIndex((route) => route.component === Study) + 1,
  TIMER: consumeRoutes.findIndex((route) => route.component === StudyTimer) + 1,
};

export const studyRoutes = [
  { path: "menu", component: StudyMenu },
  {
    path: "hooks",
    render: () => (
      <>
        <CreateHooks />
        <StudyFooter showPrevious />
      </>
    ),
  },
  {
    path: "notes",
    render: () => (
      <>
        <CreateNotes />
        <StudyFooter showPrevious />
      </>
    ),
  },
];

export const CONSUME_NUM_ROUTES = 12;
