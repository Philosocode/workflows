import { Box, BoxProps } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

interface IProps {
  children: React.ReactNode;
  draggableId: string;
  dragDisabled: boolean;
  index: number;
  wrapperProps?: BoxProps;
}
export function DraggableWrapper({
  children,
  draggableId,
  dragDisabled,
  index,
  wrapperProps,
}: IProps) {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={dragDisabled}
    >
      {(provided) => (
        <Box
          w="100%"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...wrapperProps}
        >
          {children}
        </Box>
      )}
    </Draggable>
  );
}
