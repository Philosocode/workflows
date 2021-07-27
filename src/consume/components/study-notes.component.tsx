import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IProps {
  goBack: () => void;
}
export function StudyNotes(props: IProps) {
  function createHook(title: string, content: string) {
    console.log(title, content);
  }

  return (
    <WorkflowStep
      messageContent="Create some notes. Try to do this from memory before referring to the
    material."
    >
      <CreateHookForm onSubmit={createHook} />
      <Button color="gray" onClick={props.goBack} mt={2}>
        Go Back
      </Button>
    </WorkflowStep>
  );
}
