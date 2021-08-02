import { useHistory } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { createHook } from "hook/redux/hook.slice";

import { CreateHookForm } from "hook/components/create-hook-form.component";
import { Message } from "message/components/message.component";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";

interface IProps {
  messageText: React.ReactNode;
  showIcons?: boolean;
}
export function StudyHooks(props: IProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();

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
    <>
      <Message>{props.messageText}</Message>
      <CreateHookForm
        goBack={() =>
          history.push(`/consume/${CONSUME_PAGE_NUMBERS.STUDY}/menu`)
        }
        onSubmit={handleCreateHook}
        showIcons={props.showIcons}
      />
    </>
  );
}
