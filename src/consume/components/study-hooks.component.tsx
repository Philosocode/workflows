import { useAppDispatch } from "shared/redux/store";
import { createHook } from "hook/redux/hook.slice";

import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Button } from "shared/components/button/button.component";
import { Message } from "message/components/message.component";

interface IProps {
  goBack: () => void;
  messageText: React.ReactNode;
  showIcons?: boolean;
}
export function StudyHooks(props: IProps) {
  const dispatch = useAppDispatch();

  function handleCreateHook(title: string, content: string) {
    dispatch(
      createHook({
        id: `${Date.now()}`,
        title,
        content,
        isExpanded: false,
      }),
    );
  }

  return (
    <>
      <Message>{props.messageText}</Message>
      <CreateHookForm
        goBack={props.goBack}
        onSubmit={handleCreateHook}
        showIcons={props.showIcons}
      />
    </>
  );
}
