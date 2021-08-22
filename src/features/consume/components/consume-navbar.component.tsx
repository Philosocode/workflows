import { useHistory } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";

import { useConsumeStore } from "../logic/consume.store";
import { useHookStore } from "features/hooks/logic/hook.store";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function ConsumeNavbar() {
  const history = useHistory();
  const { reset: resetHookStore } = useHookStore();
  const { studyBlockCount, reset: resetConsume } = useConsumeStore();

  function handleReset() {
    resetConsume();
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
