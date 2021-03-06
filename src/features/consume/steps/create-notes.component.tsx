import { Box } from "@chakra-ui/react";

import {
  CreateNoteForm,
  ICreateNoteFormProps,
} from "features/notes/components/create-note-form.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

export function CreateNotes(props: ICreateNoteFormProps) {
  return (
    <ConsumeWorkflowStep
      keyPressDisabled
      showButton={false}
      message={
        <>
          <Box>Create notes and summarize what you've learned.</Box>
          <Box>
            Try to do this from memory without referring to the material.
          </Box>
        </>
      }
    >
      <CreateNoteForm {...props} />
    </ConsumeWorkflowStep>
  );
}
