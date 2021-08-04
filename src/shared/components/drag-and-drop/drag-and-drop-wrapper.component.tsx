import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface IProps {
  droppableId: string;
  handleDragEnd: (result: DropResult) => void;
  children?: React.ReactNode;
}
export function DragAndDropWrapper({
  children,
  droppableId,
  handleDragEnd,
}: IProps) {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            listStyleType="none"
            w="100%"
          >
            {children}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
