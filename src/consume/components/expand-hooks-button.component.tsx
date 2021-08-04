import { Box, Icon, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineExpand } from "react-icons/ai";

import { useAppDispatch } from "shared/redux/store";
import { toggleAllHooks } from "hook/redux/hook.slice";

export function ExpandHooksButton() {
  const dispatch = useAppDispatch();

  const styles = {
    bg: useColorModeValue("green.500", "green.200"),
    color: useColorModeValue("white", "black"),
  };

  return (
    <Box
      bg={styles.bg}
      cursor="pointer"
      d="grid"
      placeItems="center"
      position="fixed"
      bottom={{ base: 5, md: 10 }}
      right={{ base: 5, md: 10 }}
      p={{ base: 3, md: 4 }}
      borderRadius="50%"
      shadow="xl"
      onClick={() => dispatch(toggleAllHooks())}
    >
      <Icon
        as={AiOutlineExpand}
        boxSize={{ base: 5, md: 7 }}
        color={styles.color}
      />
    </Box>
  );
}
