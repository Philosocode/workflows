import { selectMaterialType } from "consume/redux/consume.selectors";
import { useAppSelector } from "shared/redux/store";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";

export function StudyUnit() {
  const materialType = useAppSelector(selectMaterialType);

  const readingMessage =
    "Read for 1-2 minutes (e.g. 1-2 paragraphs or 1 page).";
  const watchMessage = "Watch for 1-2 minutes.";

  return (
    <ConsumeWorkflowStep
      message={materialType === "reading" ? readingMessage : watchMessage}
    ></ConsumeWorkflowStep>
  );
}
