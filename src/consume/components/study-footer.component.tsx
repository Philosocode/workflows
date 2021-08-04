import {
  selectCurrentHooks,
  selectPreviousHooks,
} from "hook/redux/hook.selectors";
import { useAppSelector } from "shared/redux/store";

import { HookList } from "hook/components/hook-list.component";
import { ExpandHooksButton } from "./expand-hooks-button.component";

export function StudyFooter() {
  const currentHooks = useAppSelector(selectCurrentHooks);
  const previousHooks = useAppSelector(selectPreviousHooks);

  return (
    <>
      {currentHooks.length > 0 && (
        <HookList hooks={currentHooks} heading="Current Hooks" />
      )}

      {previousHooks.length > 0 && (
        <HookList hooks={previousHooks} heading="Previous Hooks" isPrevious />
      )}

      <ExpandHooksButton />
    </>
  );
}
