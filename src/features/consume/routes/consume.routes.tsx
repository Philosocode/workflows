import { Redirect, RouteProps } from "react-router-dom";

import { StudyMenu } from "features/consume/components/study-menu.component";
import { ConsumeContinue } from "features/consume/steps/consume-continue.component";
import { ConsumeSetup } from "features/consume/steps/consume-setup.component";
import { PracticeReminder } from "features/consume/steps/practice-reminder.component";
import { SkimReminder } from "features/consume/steps/skim-reminder.component";
import { SlowReminder } from "features/consume/steps/slow-reminder.component";
import { StudySummarize } from "features/consume/steps/study-summarize.component";
import { Study } from "features/consume/steps/study.component";
import { SummaryReminder } from "features/consume/steps/summary-reminder.component";
import { SummaryScreen } from "features/consume/steps/summary-screen.component";
import { CreateNotes } from "features/consume/steps/create-notes.component";
import { StudyFooter } from "features/consume/components/study-footer.component";
import { PreStudyReminder } from "features/consume/steps/pre-study-reminder.component";
import { ConsumeFinish } from "features/consume/steps/consume-finish.component";
import { StudyUnit } from "features/consume/steps/study-unit.component";
import { commonHookIds } from "features/hooks/data/hooks.data";
import { StudyCommonHook } from "features/consume/steps/study-common-hook.component";
import { StudyHooks } from "features/consume/components/study-hooks.component";
import { StudyQuestions } from "features/consume/steps/study-questions.component";

export const consumeRoutes = [
  { component: ConsumeSetup },
  { component: PreStudyReminder },
  { component: SlowReminder },
  { component: SkimReminder },
  { component: SummaryReminder },
  { component: PracticeReminder },
  { component: StudyUnit },
  { component: StudyQuestions },
  ...commonHookIds.map((hookId, index) => ({
    render: () => (
      <StudyCommonHook questionNum={index + 1} key={hookId} hookId={hookId} />
    ),
  })),
  {
    render: () => (
      <>
        <CreateNotes />
        <StudyFooter />
      </>
    ),
  },
  { render: () => <StudyHooks showPrompt /> },
  { component: Study },
  { component: SummaryScreen },
  { component: ConsumeContinue },
  {
    render: (props: RouteProps) => (
      <StudySummarize
        {...props}
        message="Summarize everything you've learned in this study session."
      />
    ),
  },
  { component: ConsumeFinish },

  // catch-all
  { path: "/consume", render: () => <Redirect to="/consume/1" /> },
];

export const CONSUME_PAGE_NUMBERS = {
  STUDY: consumeRoutes.findIndex((route) => route.component === StudyUnit) + 1,
};

export const studyRoutes = [
  { path: "menu", component: StudyMenu },
  {
    path: "notes",
    render: () => (
      <>
        <CreateNotes
          nextButtonText="Back"
          nextUrl={`/consume/${CONSUME_PAGE_NUMBERS.STUDY}/menu`}
        />
        <StudyFooter />
      </>
    ),
  },
  {
    path: "hooks",
    render: () => <StudyHooks />,
  },
];

export const CONSUME_NUM_ROUTES = consumeRoutes.length + studyRoutes.length - 1;
