import { Box } from "@chakra-ui/react";

import { StudyHooks } from "consume/components/study-hooks.component";
import { ICreateHookFormProps } from "hook/components/create-hook-form.component";

export function CreateNotes(props: ICreateHookFormProps) {
  return (
    <StudyHooks
      createHookFormProps={props}
      showForm
      workflowProps={{
        message: (
          <>
            <Box>Create notes and summarize what you've learned.</Box>
            <Box>
              Try to do this from memory without referring to the material.
            </Box>
          </>
        ),
      }}
    />
  );
}
