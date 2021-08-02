import { Box, VStack } from "@chakra-ui/react";

import { newMaterial, nextStudyBlock } from "consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectCurrentHooks } from "hook/redux/hook.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Message } from "message/components/message.component";
import { HookList } from "hook/components/hook-list.component";

export function SummaryScreen() {
  const dispatch = useAppDispatch();
  const currentHooks = useAppSelector(selectCurrentHooks);

  const message =
    currentHooks.length === 0
      ? "You didn't create any hooks/notes during this study block."
      : `You created ${currentHooks.length} hooks/notes during this study block.
    Well done!`;

  return (
    <VStack spacing={5}>
      <Message>{message}</Message>
      <CardButtonGrid>
        <CardButton color="green" onClick={() => dispatch(nextStudyBlock())}>
          Next Block
        </CardButton>
        <CardButton color="gray" onClick={() => dispatch(newMaterial())}>
          New Material
        </CardButton>
      </CardButtonGrid>

      <Box w="full">
        <HookList hooks={currentHooks} heading="Current Hooks" dragDisabled />
      </Box>
    </VStack>
  );
}
