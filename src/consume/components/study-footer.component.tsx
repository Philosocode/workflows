import { Box, Divider, Heading, Icon } from "@chakra-ui/react";
import { AiOutlineExpand } from "react-icons/ai";

import { TStudyView } from "consume/redux/consume.types";
import { selectCurrentHooks, selectPastHooks } from "hook/redux/hook.selectors";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { toggleAllHooks } from "hook/redux/hook.slice";

import { HookList } from "../../hook/components/hook-list.component";

interface IProps {
  view: TStudyView;
}
export function StudyFooter({ view }: IProps) {
  const dispatch = useAppDispatch();
  const currentHooks = useAppSelector(selectCurrentHooks);
  const pastHooks = useAppSelector(selectPastHooks);

  return (
    <>
      {!["timer", "help"].includes(view) && currentHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Current Hooks
            </Heading>
            <HookList hooks={currentHooks} isPrevious={false} />
          </Box>
        </>
      )}

      {!["timer", "help"].includes(view) && pastHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Past Hooks
            </Heading>
            <HookList hooks={pastHooks} isPrevious />
          </Box>
        </>
      )}

      {!["timer", "help"].includes(view) && (
        <Box
          bg="green.400"
          cursor="pointer"
          d="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          bottom={10}
          right={10}
          p={4}
          borderRadius="50%"
          shadow="xl"
          onClick={() => dispatch(toggleAllHooks())}
        >
          <Icon as={AiOutlineExpand} boxSize={7} color="white" />
        </Box>
      )}
    </>
  );
}
