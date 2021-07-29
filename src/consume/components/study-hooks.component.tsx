import { useAppDispatch } from "shared/redux/store";
import { createHook } from "hook/logic/hook.slice";

import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IProps {
  goBack: () => void;
  messageText: React.ReactNode;
  showIcons?: boolean;
}
export function StudyHooks(props: IProps) {
  const dispatch = useAppDispatch();

  function handleCreateHook(title: string, content: string) {
    dispatch(createHook({ id: `${Date.now()}`, title, content }));
  }

  return (
    <WorkflowStep messageContent={props.messageText}>
      <CreateHookForm onSubmit={handleCreateHook} showIcons={props.showIcons} />
      <Button color="gray" onClick={props.goBack} mt={2}>
        Go Back
      </Button>
    </WorkflowStep>
  );
}
