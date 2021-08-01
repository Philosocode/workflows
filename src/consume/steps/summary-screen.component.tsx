import { ButtonGroup, Heading, VStack } from "@chakra-ui/react";

import { newMaterial, nextStudyBlock } from "consume/redux/consume.slice";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { Button } from "shared/components/button/button.component";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { HookList } from "../../hook/components/hook-list.component";

export function SummaryScreen() {
  const dispatch = useAppDispatch();
  const currentHooks = useAppSelector(selectCurrentHooks);

  return (
    <VStack spacing={5}>
      <Heading size="md">
        You created {currentHooks.length} hooks/notes in this study block
      </Heading>
      <ButtonGroup mt={5}>
        <Button color="green" onClick={() => dispatch(nextStudyBlock())}>
          Next Study Block
        </Button>
        <Button color="gray" onClick={() => dispatch(newMaterial())}>
          New Material
        </Button>
      </ButtonGroup>
      <HookList hooks={currentHooks} dragDisabled />
    </VStack>
  );
}
