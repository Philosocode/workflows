import { useState } from "react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

import { CONSUME_PAGE_NUMBERS } from "features/consume/routes/consume.routes";
import { useConsumeStore } from "../logic/consume.store";
import { useLocationStore } from "features/location/location.store";
import { TMaterialType } from "features/consume/logic/consume.types";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { RadioButtonGroup } from "shared/components/form/radio-button-group.component";

export function ConsumeSetup() {
  const history = useHistory();
  const { setMaterialType: updateMaterialType } = useConsumeStore();
  const { currentStep } = useLocationStore();
  const [materialType, setMaterialType] = useState<TMaterialType>("reading");

  function handleSubmit() {
    updateMaterialType(materialType);
    history.push(`/consume/${currentStep + 1}`);
  }

  function skipToStudy() {
    updateMaterialType(materialType);
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.STUDY_START}`);
  }

  return (
    <ConsumeWorkflowStep
      message="What are you studying today?"
      showButton={false}
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={theme.spacing.formGroupSpacing} alignItems="start">
          <RadioButtonGroup
            id="materialType"
            labelText="Material Type:"
            onChange={(type: TMaterialType) => setMaterialType(type)}
            value={materialType}
            values={[
              {
                text: "Reading",
                value: "reading",
              },
              {
                text: "Watching",
                value: "watching",
              },
            ]}
          />

          <CardButtonGrid
            mt={theme.spacing.workflowStepButtonSpacing}
            buttons={[
              {
                text: "Next",
                color: "green",
                type: "submit",
              },
              {
                text: "Skip To Study",
                onClick: skipToStudy,
              },
            ]}
          />
        </VStack>
      </form>
    </ConsumeWorkflowStep>
  );
}
