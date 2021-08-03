import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";
import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";

export function DuckDebugPage() {
  // whenever page number param changes, set it
  useCurrentStepParam((pageNumber) => console.log(pageNumber));

  return <DuckDebugNavbar />;
}
