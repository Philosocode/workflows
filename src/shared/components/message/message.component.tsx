import {
  Avatar,
  Box,
  Fade,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";

import { IAvatarConfig } from "features/avatar/shared/avatar.type";
import { soul } from "features/avatar/data/soul.avatar";
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
        fontSize={{ base: "md", sm: "lg", md: "2xl" }}
        fontFamily={avatar.fontFamily ?? "body"}
        textColor={styles.textColor}
      >
        <HStack className="header" position="absolute" top={3} left={3}>
          <Avatar size="sm" src={avatar.imageSrc} />
          <Text
            sx={theme.typography.condensed}
            fontSize={theme.typography.fontSize.card}
            fontFamily="body"
            textColor={styles.titleColor}
          >
            {avatar.name}
          </Text>
        </HStack>

        {props.children}
      </Box>
    </Fade>
  );
}
