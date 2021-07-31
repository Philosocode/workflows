import { VStack } from "@chakra-ui/react";
import { DropResult } from "react-beautiful-dnd";

import { IHook } from "hook/logic/hook.types";
import { HookListItem } from "./hook-list-item.component";
import { DragAndDropWrapper } from "shared/components/drag-and-drop/drag-and-drop-wrapper.component";
import { DraggableWrapper } from "shared/components/drag-and-drop/draggable-wrapper.component";
import { repositionHook } from "hook/logic/hook.slice";
import { useAppDispatch } from "shared/redux/store";

interface IProps {
  hooks: IHook[];
  isPrevious: boolean;
  dragDisabled?: boolean;
}
export function HookList(props: IProps) {
  const dispatch = useAppDispatch();

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination || destination.index === source.index) return;

    const oldIndex = source.index;
    const newIndex = destination.index;

    dispatch(
      repositionHook({
        oldIndex,
        newIndex,
        isPrevious: props.isPrevious,
      }),
    );
  }

  return (
    <DragAndDropWrapper
      droppableId="hook-list-droppable"
      handleDragEnd={handleDragEnd}
    >
      <VStack w="100%" mt={10} spacing={5}>
        {props.hooks.map((hook, index) => (
          <DraggableWrapper
            key={hook.id}
            draggableId={hook.id}
            dragDisabled={props.dragDisabled ?? false}
            index={index}
          >
            <HookListItem key={hook.id} hook={hook} />
          </DraggableWrapper>
        ))}
      </VStack>
    </DragAndDropWrapper>
  );
}
