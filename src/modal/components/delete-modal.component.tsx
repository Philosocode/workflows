import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface IProps {
  isShowing: boolean;
  onClose: () => void;
  onDelete: () => void;
}
export function DeleteModal(props: IProps) {
  const cancelRef = useRef<HTMLElement>(null);

  return (
    <>
      <AlertDialog
        isOpen={props.isShowing}
        onClose={props.onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Hook
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={props.onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={props.onDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
