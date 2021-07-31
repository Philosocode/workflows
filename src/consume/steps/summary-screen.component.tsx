import { Box, ButtonGroup, Heading, Text } from "@chakra-ui/react";

import { selectMaterialName } from "consume/redux/consume.selectors";
import { newMaterial, nextStudyBlock } from "consume/redux/consume.slice";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { Button } from "shared/components/button.component";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { HookList } from "../components/hook-list.component";

export function SummaryScreen() {
  const dispatch = useAppDispatch();
  const materialName = useAppSelector(selectMaterialName);
  const currentHooks = useAppSelector(selectCurrentHooks);

  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading size="lg">Summary Screen</Heading>
      <Text>Material Name: {materialName}</Text>
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
