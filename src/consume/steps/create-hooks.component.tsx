import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { ICreateHookFormProps } from "hook/components/create-hook-form.component";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppSelector } from "shared/redux/store";
import { selectNextStep } from "step/step.slice";

import { StudyHooks } from "consume/components/study-hooks.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

interface IProps extends ICreateHookFormProps {
  showPrompt?: boolean;
}
export function CreateHooks(props: IProps) {
  const history = useHistory();
  const [hasConcepts, toggleHasConcepts] = useToggle();
  const nextStep = useAppSelector(selectNextStep);

  function getMessage() {
    if (!props.showPrompt || hasConcepts) {
      return (
        <Messages>
          <UnorderedList>
            <ListItem>Pause and think deeply about the concept.</ListItem>
            <ListItem>
              Use the form below to create hooks and better understand the
              concept.
            </ListItem>
            <ListItem>
              Creating hooks until you have a solid understanding of the
              concept.
            </ListItem>
          </UnorderedList>
        </Messages>
      );
    } else {
      return "Were there any concepts or ideas you were struggling with or want to understand better?";
    }
  }

  return (
    <StudyHooks
      showForm={!props.showPrompt || hasConcepts}
      createHookFormProps={{
        showIcons: true,
        ...props,
      }}
      workflowProps={{
        message: getMessage(),
      }}
    >
      {props.showPrompt && !hasConcepts && (
        <CardButtonGrid
          buttons={[
            { text: "Yes", onClick: toggleHasConcepts },
            {
              text: "No",
              onClick: () => history.push(`/consume/${nextStep}`),
            },
          ]}
        />
      )}
    </StudyHooks>
  );
}
