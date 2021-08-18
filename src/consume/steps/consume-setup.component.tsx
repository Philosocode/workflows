import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

import { TMaterialType } from "consume/redux/consume.types";
import { useAppSelector } from "shared/redux/store";
import { setMaterialData } from "consume/redux/consume.slice";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { RadioButtonGroup } from "form/components/radio-button-group.component";

interface IFormProps {
  materialType: TMaterialType;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}
export function ConsumeSetup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const nextStep = useAppSelector(selectNextStep);

  const { formState, handleSubmit, register, getValues } = useForm<IFormProps>({
    mode: "onChange",
  });

  function onSubmit(values: IFormProps) {
    dispatch(setMaterialData(values));
    history.push(`/consume/${nextStep}`);
  }

  function skipToStudy() {
    dispatch(setMaterialData(getValues()));
    history.push(`/consume/1`);
  }

  return (
    <ConsumeWorkflowStep
      message="What are you studying today?"
      showButton={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={7} alignItems="start">
          <RadioButtonGroup
            id="materialType"
            labelText="Material Type:"
            values={[
              {
                text: "Reading",
                value: "reading",
                props: { ...register("materialType", { required: true }) },
              },
              {
                text: "Watching",
                value: "watching",
                props: { ...register("materialType", { required: true }) },
              },
            ]}
          />

          <CardButtonGrid
            mt={theme.spacing.workflowStepButtonSpacing}
            buttons={[
              {
                text: "Next",
                color: "green",
                disabled: !formState.isValid,
                type: "submit",
              },
              {
                text: "Skip To Study",
                disabled: !formState.isValid,
                onClick: skipToStudy,
              },
            ]}
          />
        </VStack>
      </form>
    </ConsumeWorkflowStep>
  );
}
