import { Avatar, Box, Fade, useColorModeValue, HStack } from "@chakra-ui/react";

import { IAvatarConfig } from "avatar/shared/avatar.type";
import { soul } from "avatar/data/soul.avatar";
import { theme } from "shared/styles/theme";
interface IProps {
  avatar?: IAvatarConfig;
  children?: React.ReactNode;
}
export interface IMessageProps extends IProps {}
export function Message(props: IProps) {
  const avatar = props.avatar ?? soul;

  const styles = {
    bg: useColorModeValue(avatar.bg.light, avatar.bg.dark),
    borderColor: useColorModeValue(
      avatar.borderColor.light,
      avatar.borderColor.dark,
    ),
    titleColor: useColorModeValue(
      avatar.titleColor.light,
      avatar.titleColor.dark,
    ),
    textColor: useColorModeValue(avatar.textColor.light, avatar.textColor.dark),
  };

  return (
    <Fade in>
      <Box
        border="1px solid"
        borderColor={styles.borderColor}
        bg={styles.bg}
        mb={theme.spacing.workflowStepButtonSpacing}
        maxW="full"
        rounded="lg"
        shadow="md"
        px={{ base: 5, md: 10 }}
        pt={{ base: 14, md: 16 }}
        pb={{ base: 5, md: 7 }}
        position="relative"
        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
        fontFamily={avatar.fontFamily ?? "sans-serif"}
        textColor={styles.textColor}
      >
        <HStack className="header" position="absolute" top={3} left={3}>
          <Avatar size="sm" src={avatar.imageSrc} />
          <Box
            sx={theme.typography.condensed}
            fontSize={{ base: 8, md: 11 }}
            fontFamily="sans-serif"
            textColor={styles.titleColor}
          >
            {avatar.name}
          </Box>
        </HStack>

        {props.children}
      </Box>
    </Fade>
  );
}
