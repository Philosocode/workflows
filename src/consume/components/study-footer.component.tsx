import {
  selectCurrentHooks,
  selectPreviousHooks,
} from "hook/redux/hook.selectors";
import { useAppSelector } from "shared/redux/store";

import { HookList } from "hook/components/hook-list.component";
import { ExpandHooksButton } from "./expand-hooks-button.component";

interface IProps {
  showPrevious?: boolean;
}
export function StudyFooter(props: IProps) {
  const currentHooks = useAppSelector(selectCurrentHooks);
  const previousHooks = useAppSelector(selectPreviousHooks);

  const hasCurrentHooks = currentHooks.length > 0;
  const hasPreviousHooks = previousHooks.length > 0;

  function shouldShowExpandButton() {
    if (hasCurrentHooks) return true;
    if (hasPreviousHooks && props.showPrevious) return true;

    return false;
  }

  return (
    <>
      {hasCurrentHooks && (
        <HookList hooks={currentHooks} heading="Current Hooks" />
      )}

      {props.showPrevious && hasPreviousHooks && (
        <HookList hooks={previousHooks} heading="Previous Hooks" isPrevious />
      )}

      {shouldShowExpandButton() && <ExpandHooksButton />}
    </>
  );
}
