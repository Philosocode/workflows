import { Box, VStack } from "@chakra-ui/react";

import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { useAppSelector } from "shared/redux/store";
import { useNextPage } from "shared/hooks/use-next-page.hook";
import { selectStep } from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { HookList } from "hook/components/hook-list.component";
import { Link } from "typography/components/link.component";
import { Button } from "shared/components/button/button.component";
import { theme } from "shared/styles/theme";

export function SummaryScreen() {
  const step = useAppSelector(selectStep);
  const currentHooks = useAppSelector(selectCurrentHooks);
  const nextPage = useNextPage("/consume", step);

  if (currentHooks.length === 0) nextPage();

  return (
    <>
      <Message>
        <VStack
          spacing={theme.spacing.messageBoxSpacing}
          alignItems="flex-start"
        >
          <Box>
            Look at your hooks below. Is there anything you'd like to remember
            in the long-term?
          </Box>
          <Box>
            Create flashcards using tools like{" "}
            <Link href="https://apps.ankiweb.net/">Anki</Link> or{" "}
            <Link href="https://quizlet.com/">Quizlet</Link>.
          </Box>
          <Box>
            <Link href="https://www.supermemo.com/en/archives1990-2015/articles/20rules">
              Visit this link
            </Link>{" "}
            for tips on creating effective flashcards.
          </Box>
        </VStack>
      </Message>
      <Button onClick={nextPage}>Next</Button>

      <Box w="full">
        <HookList hooks={currentHooks} heading="Current Hooks" dragDisabled />
      </Box>
    </>
  );
}
