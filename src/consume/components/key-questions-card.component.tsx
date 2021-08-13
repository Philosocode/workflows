import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { useTheme } from "shared/hooks/use-theme.hook";
import { commonHooks } from "hook/shared/hooks.data";
import { theme } from "shared/styles/theme";

import { CardWrapper } from "shared/components/card/card-wrapper.component";

export function KeyQuestionsCard() {
  const dlTheme = useTheme();

  return (
    <CardWrapper
      px={{ base: 5, md: 10 }}
      py={{ base: 5, md: 8 }}
      mb={theme.spacing.workflowStepButtonSpacing}
      position="relative"
    >
      <Text
        color={dlTheme.components.card.textColorFaint}
        fontSize={theme.typography.fontSize.card}
        sx={theme.typography.condensed}
      >
        Key Questions
      </Text>
      <Text
        textColor={dlTheme.colors.text}
        fontSize={{ base: "md", sm: "lg", md: "2xl" }}
      >
        <UnorderedList>
          {commonHooks.map((hook) => (
            <ListItem key={hook}>{hook}</ListItem>
          ))}
        </UnorderedList>
      </Text>
    </CardWrapper>
  );
}
