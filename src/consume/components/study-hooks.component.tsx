import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IProps {
  goBack: () => void;
  messageText: React.ReactNode;
  showIcons?: boolean;
}
export function StudyHooks(props: IProps) {
  function createHook(title: string, content: string) {
    console.log(title, content);
  }

  return (
    <WorkflowStep messageContent={props.messageText}>
      <CreateHookForm onSubmit={createHook} showIcons={props.showIcons} />
      <Button color="gray" onClick={props.goBack} mt={2}>
        Go Back
      </Button>
    </WorkflowStep>
  );
}
