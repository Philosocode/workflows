import { Box, ButtonGroup, Heading, Text } from "@chakra-ui/react";

import { newMaterial, nextStudyBlock } from "consume/redux/consume.slice";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { Button } from "shared/components/button.component";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { HookList } from "../components/hook-list.component";

export function SummaryScreen() {
  const dispatch = useAppDispatch();
  const currentHooks = useAppSelector(selectCurrentHooks);

  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading size="md">Summary Screen</Heading>
      <Text>Hooks Created: {currentHooks.length}</Text>
      <ButtonGroup mt={5}>
        <Button color="green" onClick={() => dispatch(nextStudyBlock())}>
          Next Study Block
        </Button>
        <Button color="gray" onClick={() => dispatch(newMaterial())}>
          New Material
        </Button>
      </ButtonGroup>
      <HookList hooks={currentHooks} isPrevious={false} dragDisabled />
    </Box>
  );
}
