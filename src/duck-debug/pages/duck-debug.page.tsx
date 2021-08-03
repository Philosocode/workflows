import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";
import { usePageParam } from "shared/hooks/use-page-param.hook";

export function DuckDebugPage() {
  // whenever page number param changes, set it
  usePageParam((pageNumber) => console.log(pageNumber));

  return <DuckDebugNavbar />;
}
