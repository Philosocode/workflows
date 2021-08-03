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

interface IProps extends IWorkflowStepProps {}
export function DuckDebugWorkflowStep(props: IProps) {
  const currentStep = useAppSelector(selectDuckDebugStep);
  const isProgrammer = useAppSelector(selectIsProgrammer);

  const basePath = isProgrammer ? "/duck-debug/prog" : "/duck-debug/regular";
  const nextStep = useNextStep(basePath, currentStep);

  return (
    <WorkflowStep
      onNext={nextStep}
      {...props}
      messageProps={{ avatar: quackers }}
      editor={{
        showEditor: true,
      }}
    >
      {props.children}
    </WorkflowStep>
  );
}
