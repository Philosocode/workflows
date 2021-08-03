import { useAppDispatch } from "shared/redux/store";
import { setStep } from "consume/redux/consume.slice";

import { ConsumeNavbar } from "consume/components/consume-navbar.component";
import { usePageParam } from "shared/hooks/use-page-param.hook";

export function ConsumePage() {
  const dispatch = useAppDispatch();

  // whenever page number param changes, set it
  usePageParam((pageNumber) => dispatch(setStep(pageNumber)));

  return <ConsumeNavbar />;
}
