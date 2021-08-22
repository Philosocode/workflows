import { Box, Divider, Heading } from "@chakra-ui/react";
import { DropResult } from "react-beautiful-dnd";

import { INote } from "../logic/note.types";
import { useNoteStore } from "../logic/note.store";

import { DragAndDropWrapper } from "shared/components/drag-and-drop/drag-and-drop-wrapper.component";
import { DraggableWrapper } from "shared/components/drag-and-drop/draggable-wrapper.component";
import { NoteListItem } from "features/notes/components/note-list-item.component";

interface IProps {
  heading: string;
  notes: INote[];

  dragDisabled?: boolean;
}
export function NoteList(props: IProps) {
  const { repositionNote } = useNoteStore();

  function handleDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination || destination.index === source.index) return;

    const oldIndex = source.index;
    const newIndex = destination.index;

    repositionNote({
      oldIndex,
      newIndex,
    });
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
