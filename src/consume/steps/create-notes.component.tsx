import { Box } from "@chakra-ui/react";

import {
  CreateNoteForm,
  ICreateNoteFormProps,
} from "features/notes/components/create-note-form.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { StudyFooter } from "consume/components/study-footer.component";

export function CreateNotes(props: ICreateNoteFormProps) {
  return (
    <ConsumeWorkflowStep
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
      <StudyFooter />
    </ConsumeWorkflowStep>
  );
}
