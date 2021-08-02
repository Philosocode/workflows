import { Divider, Heading, VStack } from "@chakra-ui/react";

import { TStudyView } from "consume/redux/consume.types";
import {
  selectCurrentHooks,
  selectPreviousHooks,
} from "hook/redux/hook.selectors";
import { useAppSelector } from "shared/redux/store";

import { HookList } from "hook/components/hook-list.component";
import { ExpandHooksButton } from "./expand-hooks-button.component";

interface IProps {
  view: TStudyView;
}
export function StudyFooter({ view }: IProps) {
  const currentHooks = useAppSelector(selectCurrentHooks);
  const previousHooks = useAppSelector(selectPreviousHooks);

  const shouldShowHooks = view !== "timer" && view !== "help";
  if (!shouldShowHooks) return null;

  return (
    <>
      {currentHooks.length > 0 && (
        <HookList hooks={currentHooks} heading="Current Hooks" />
      )}

      {previousHooks.length > 0 && (
        <HookList hooks={previousHooks} heading="Previous Hooks" isPrevious />
      )}

      <ExpandHooksButton view={view} />
    </>
  );
}
