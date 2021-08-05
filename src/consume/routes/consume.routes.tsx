import { Redirect, RouteProps } from "react-router-dom";
import { ListItem, UnorderedList } from "@chakra-ui/react";

import { StudyHooks } from "consume/components/study-hooks.component";
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
import { TimerReminder } from "consume/steps/timer-reminder.component";
import { Messages } from "message/components/messages.component";
import { theme } from "shared/styles/theme";

export const consumeRoutes = [
  { component: ConsumeSetup, path: "/consume/setup" },
  { component: SlowReminder },
  { component: TimerReminder },
  { component: SkimReminder },
  { component: SummaryReminder },
  { component: PracticeReminder },
  {
    render: (props: RouteProps) => (
      <StudySummarize
        {...props}
        message="Summarize everything you've learned so far. Try to do it from 
        memory, without looking at the material."
      />
    ),
  },
  { component: StudyTimer },
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
  { path: "/consume", render: () => <Redirect to="/consume/setup" /> },
];

export const CONSUME_PAGE_NUMBERS = {
  STUDY: consumeRoutes.findIndex((route) => route.component === Study),
  TIMER: consumeRoutes.findIndex((route) => route.component === StudyTimer),
};

export const studyRoutes = [
  { path: "menu", component: StudyMenu },
  {
    path: "hooks",
    render: () => (
      <StudyHooks
        showIcons
        messageText={
          <Messages>
            <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
              <ListItem>
                Pause and think deeply about the concept. Don't rush.
              </ListItem>
              <ListItem>
                Create hooks for concepts and ideas you're struggling to
                understand or want to understand better.
              </ListItem>
              <ListItem>
                Keep creating hooks until you have a solid understanding of the
                concept.
              </ListItem>
            </UnorderedList>
          </Messages>
        }
      />
    ),
  },
  {
    path: "notes",
    render: () => (
      <StudyHooks
        messageText={
          <Messages>
            <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
              <ListItem>
                Create notes to summarize what what you've learned during this
                study block.
              </ListItem>
              <ListItem>
                Try to do this from memory without referring to the material.
              </ListItem>
            </UnorderedList>
          </Messages>
        }
      />
    ),
  },
];
