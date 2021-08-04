import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useAppSelector } from "shared/redux/store";
import { useNextStep } from "shared/hooks/use-next-step.hook";
import {
  selectDuckDebugStep,
  selectIsProgrammer,
} from "duck-debug/redux/duck-debug.selectors";
import { quackers } from "avatars/data/quackers.avatar";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";

interface IProps extends IWorkflowStepProps {}
export function DuckDebugWorkflowStep(props: IProps) {
  const currentStep = useAppSelector(selectDuckDebugStep);
  const isProgrammer = useAppSelector(selectIsProgrammer);
  const suffix = isProgrammer ? "prog" : "regular";
  const nextStep = useNextStep(DUCK_DEBUG_BASE_PATH, currentStep, suffix);

  return (
    <WorkflowStep
      onNext={nextStep}
      messageProps={{ avatar: quackers }}
      editor={{
        showEditor: true,
      }}
      keyPressDisabled
      {...props}
    >
      {props.children}
    </WorkflowStep>
  );
}
