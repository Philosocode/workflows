import { useAppDispatch } from "shared/redux/store";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useHistory } from "react-router-dom";
import { resetConsume } from "../redux/consume.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { StudyBlockCounter } from "features/consume/components/study-block-counter.component";

export function ConsumeNavbar() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { resetHookStore } = useHookStore();

  function handleReset() {
    dispatch(resetConsume());
    resetHookStore();
    history.push("/consume/1");
  }

  return (
    <AppNavbar
      exitUrl="/"
      handleReset={handleReset}
      rightSlot={<StudyBlockCounter />}
    />
  );
}
