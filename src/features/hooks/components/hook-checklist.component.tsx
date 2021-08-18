import { VStack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

import { useHookStore } from "../logic/hook.store";
import { IHook } from "../logic/hook.types";

interface IProps {
  hooks: IHook[];
}
export function HookChecklist(props: IProps) {
  const { completedIds, toggleCompletedId } = useHookStore();

  return (
    <VStack spacing={2} alignItems="start">
      <CheckboxGroup colorScheme="green" size="lg">
        {props.hooks.map((hook) => (
          <Checkbox
            key={hook.id}
            isChecked={completedIds.has(hook.id)}
            onChange={() => toggleCompletedId(hook.id)}
          >
            {hook.prompt}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </VStack>
  );
}
