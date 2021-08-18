import { Box, Divider, Heading } from "@chakra-ui/react";
import { DropResult } from "react-beautiful-dnd";

import { useAppDispatch } from "shared/redux/store";

import { INote } from "../logic/note.types";
import { repositionNote } from "../logic/note.slice";

import { DragAndDropWrapper } from "shared/components/drag-and-drop/drag-and-drop-wrapper.component";
import { DraggableWrapper } from "shared/components/drag-and-drop/draggable-wrapper.component";
import { NoteListItem } from "features/notes/components/note-list-item.component";

interface IProps {
  heading: string;
  notes: INote[];

  dragDisabled?: boolean;
  isPrevious?: boolean;
}
export function NoteList(props: IProps) {
  const dispatch = useAppDispatch();

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination || destination.index === source.index) return;

    const oldIndex = source.index;
    const newIndex = destination.index;

    dispatch(
      repositionNote({
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
        droppableId="note-list-droppable"
        handleDragEnd={handleDragEnd}
      >
        <Box>
          {props.notes.map((note, index) => (
            <DraggableWrapper
              key={note.id}
              draggableId={note.id}
              dragDisabled={props.dragDisabled ?? false}
              index={index}
              wrapperProps={{ mt: { base: 3, md: 5 } }}
            >
              <NoteListItem key={note.id} note={note} />
            </DraggableWrapper>
          ))}
        </Box>
      </DragAndDropWrapper>
    </>
  );
}
