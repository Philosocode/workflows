import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { useHistory } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";

import { useHookStore } from "features/hooks/logic/hook.store";
import { resetConsume } from "../redux/consume.slice";
import { selectConsumeState } from "../redux/consume.selectors";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function ConsumeNavbar() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { resetHookStore } = useHookStore();
  const { studyBlockCount } = useAppSelector(selectConsumeState);

  function handleReset() {
    dispatch(resetConsume());
    resetHookStore();
    history.push("/consume/1");
  }

  return (
    <AppNavbar
      exitUrl="/"
      handleReset={handleReset}
      blockCounter={{
        count: studyBlockCount,
        icon: FaHashtag,
      }}
    />
  );
}
