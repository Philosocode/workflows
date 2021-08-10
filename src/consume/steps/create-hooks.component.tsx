import { ListItem, UnorderedList } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

import { StudyHooks } from "consume/components/study-hooks.component";
import { Messages } from "message/components/messages.component";
import { ICreateHookFormProps } from "hook/components/create-hook-form.component";

export function CreateHooks(props: ICreateHookFormProps) {
  return (
    <StudyHooks
      createHookFormProps={{
        showIcons: true,
        ...props,
      }}
      workflowProps={{
        message: (
          <Messages>
            <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
              <ListItem>
                Create hooks for concepts and ideas you're struggling to
                understand or want to understand better.
              </ListItem>
              <ListItem>
                Pause and think deeply about the concept. Don't rush.
              </ListItem>
              <ListItem>
                Keep creating hooks until you have a solid understanding of the
                concept.
              </ListItem>
            </UnorderedList>
          </Messages>
        ),
      }}
    />
  );
}
