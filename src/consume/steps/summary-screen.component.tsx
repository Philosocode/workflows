import { Box } from "@chakra-ui/react";

import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { useAppSelector } from "shared/redux/store";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { HookList } from "hook/components/hook-list.component";
import { Link } from "typography/components/link.component";
import { Messages } from "message/components/messages.component";
import { Redirect } from "react-router-dom";

export function SummaryScreen() {
  const nextStep = useAppSelector(selectNextStep);
  const currentHooks = useAppSelector(selectCurrentHooks);

  if (currentHooks.length === 0)
    return <Redirect to={`/consume/${nextStep}`} />;

  return (
    <>
      <ConsumeWorkflowStep
        message={
          <Messages>
            <Box>
              Look at your hook(s) below. Is there anything you want to remember
              in the long-term?
            </Box>
            <Box>
              Create flashcards using tools like{" "}
              <Link href="https://apps.ankiweb.net/">Anki</Link> or{" "}
              <Link href="https://quizlet.com/">Quizlet</Link>.
            </Box>
            <Box fontSize={theme.typography.fontSize.messageAside}>
              For tips on creating effective flashcards, {}
              <Link href="https://www.supermemo.com/en/archives1990-2015/articles/20rules">
                visit this website.
              </Link>
            </Box>
          </Messages>
        }
      />
      <Box w="full">
        <HookList hooks={currentHooks} heading="Current Hooks" dragDisabled />
      </Box>
    </>
  );
}
