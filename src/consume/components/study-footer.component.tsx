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

  const hasCurrentHooks = currentHooks.length > 0;
  const hasPreviousHooks = previousHooks.length > 0;

  return (
    <>
      {hasCurrentHooks && (
        <HookList hooks={currentHooks} heading="Current Hooks" />
      )}

      {hasPreviousHooks && (
        <HookList hooks={previousHooks} heading="Previous Hooks" isPrevious />
      )}

      {(hasPreviousHooks || hasCurrentHooks) && <ExpandHooksButton />}
    </>
  );
}
