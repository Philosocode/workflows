import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { theme } from "shared/styles/theme";

interface IProps {
  onClick: () => void;
  disabled?: boolean;
}
export function PracticeQuestionsButtons(props: IProps) {
  return (
    <CardButtonGrid
      mt={theme.spacing.workflowStepButtonSpacing}
      buttons={[
        {
          text: "Next Topic",
          color: "green",
          disabled: props.disabled,
          onClick: props.onClick,
        },
        { text: "Done Studying", to: "/practice-questions/3" },
      ]}
    />
  );
}
