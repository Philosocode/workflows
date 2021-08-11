import { StackProps, Text } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

import { useRandom } from "shared/hooks/use-random.hook";
import { theme } from "shared/styles/theme";
import { useTheme } from "shared/hooks/use-theme.hook";

import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";

interface IProps {
  ariaLabel: string;
  heading: string;
  values: any[];

  wrapperProps?: StackProps;
}
export function RandoCard(props: IProps) {
  const [value, getRandomValue] = useRandom(props.values);
  const dllTheme = useTheme();

  return (
    <CardWrapper
      px={{ base: 5, md: 10 }}
      py={8}
      mb={10}
      position="relative"
      {...props.wrapperProps}
    >
      <IconButton
        aria-label={props.ariaLabel}
        onClick={getRandomValue}
        icon={<FaRedo />}
        position="absolute"
        right={5}
        top={5}
      />
      <Text
        color={dllTheme.components.card.textColorFaint}
        fontSize="sm"
        sx={theme.typography.condensed}
      >
        {props.heading}
      </Text>
      <Text
        textColor={dllTheme.colors.text}
        fontSize={{ base: "xl", md: "2xl" }}
      >
        {value}
      </Text>
    </CardWrapper>
  );
}
