import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { createHook } from "hook/redux/hook.slice";
import { selectCurrentStep } from "step/step.slice";

import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Message } from "message/components/message.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";

interface IProps {
  messageText: React.ReactNode;
  showIcons?: boolean;
}
export function StudyHooks(props: IProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(selectCurrentStep);

  function handleCreateHook(title: string, content: string) {
    dispatch(
      createHook({
        id: `${Date.now()}`,
        title,
        content,
        isExpanded: true,
      }),
    );
  }

  return (
    <ConsumeWorkflowStep message={props.messageText} showButton={false}>
      <CreateHookForm
        goBack={() => history.push(`/consume/${currentStep}/menu`)}
        onSubmit={handleCreateHook}
        showIcons={props.showIcons}
      />
    </ConsumeWorkflowStep>
  );
}
