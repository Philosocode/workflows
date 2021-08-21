import {
  VStack,
  CheckboxGroup,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useHookStore } from "../logic/hook.store";
import { IHook } from "../logic/hook.types";

interface IProps {
  hooks: IHook[];
}
export function HookChecklist(props: IProps) {
  const { completedIds, toggleCompletedId } = useHookStore();
  const checkboxSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <VStack spacing={{ base: 4, md: 3 }} alignItems="start">
      <CheckboxGroup colorScheme="green" size={checkboxSize}>
        {props.hooks.map((hook) => (
          <Checkbox
            key={hook.id}
            spacing={3}
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
