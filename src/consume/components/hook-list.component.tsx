import { VStack } from "@chakra-ui/react";
import { IHook } from "hook/logic/hook.types";
import { HookListItem } from "./hook-list-item.component";

interface IProps {
  hooks: IHook[];
}
export function HookList(props: IProps) {
  return (
    <VStack w="100%" mt={5} spacing={5}>
      {props.hooks.map((hook) => (
        <HookListItem key={hook.id} hook={hook} />
      ))}
    </VStack>
  );
}
