import { ReactNode } from "react";

import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";

interface IProps {
  message: ReactNode;
}
export function DuckDebugStep(props: IProps) {
  return <DuckDebugWorkflowStep message={props.message} />;
}
