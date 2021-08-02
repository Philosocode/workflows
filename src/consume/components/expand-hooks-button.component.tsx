import { Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineExpand } from "react-icons/ai";

import { TStudyView } from "consume/redux/consume.types";
import { useAppDispatch } from "shared/redux/store";
import { toggleAllHooks } from "hook/redux/hook.slice";

interface IProps {
  view: TStudyView;
}
export function ExpandHooksButton({ view }: IProps) {
  const dispatch = useAppDispatch();

  const styles = {
    bg: useColorModeValue("green.500", "green.200"),
    color: useColorModeValue("white", "black"),
  };

  if (view === "timer" || view === "help") return null;
  return (
    <Box
      bg={styles.bg}
      cursor="pointer"
      d="grid"
      placeItems="center"
      position="fixed"
      bottom={10}
      right={10}
      p={4}
      borderRadius="50%"
      shadow="xl"
      onClick={() => dispatch(toggleAllHooks())}
    >
      <Icon as={AiOutlineExpand} boxSize={7} color={styles.color} />
    </Box>
  );
}
