import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import { DropResult } from "react-beautiful-dnd";

import { IHook } from "hook/shared/hook.types";
import { useAppDispatch } from "shared/redux/store";
import { repositionHook } from "hook/redux/hook.slice";

import { DragAndDropWrapper } from "shared/components/drag-and-drop/drag-and-drop-wrapper.component";
import { DraggableWrapper } from "shared/components/drag-and-drop/draggable-wrapper.component";
import { HookListItem } from "hook/components/hook-list-item.component";

interface IProps {
  heading: string;
  hooks: IHook[];

  dragDisabled?: boolean;
  isPrevious?: boolean;
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
        isPrevious: props.isPrevious ?? false,
      }),
    );
  }

  return (
    <>
      <Divider my={10} />
      <Heading textAlign="center" size="lg" mb={5}>
        {props.heading}
      </Heading>
      <DragAndDropWrapper
        droppableId="hook-list-droppable"
        handleDragEnd={handleDragEnd}
      >
        <Box>
          {props.hooks.map((hook, index) => (
            <DraggableWrapper
              key={hook.id}
              draggableId={hook.id}
              dragDisabled={props.dragDisabled ?? false}
              index={index}
              wrapperProps={{ mt: { base: 3, md: 5 } }}
            >
              <HookListItem key={hook.id} hook={hook} />
            </DraggableWrapper>
          ))}
        </Box>
      </DragAndDropWrapper>
    </>
  );
}
