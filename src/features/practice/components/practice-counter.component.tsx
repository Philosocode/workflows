import { Box, Heading } from "@chakra-ui/react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { theme } from "shared/styles/theme";
import { useTheme } from "shared/hooks/use-theme.hook";

import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/button/icon-button.component";

interface IProps {
  count: number;
  goal: number;
  setCount: (nextCount: number) => void;
}
export function PracticeCounter(props: IProps) {
  const dlTheme = useTheme();

  function decrement() {
    if (props.count === 0) return;
    props.setCount(props.count - 1);
  }

  function increment() {
    props.setCount(props.count + 1);
  }

  return (
    <CardWrapper
      alignItems="center"
      py={10}
      bg="none"
      border="1px solid"
      sx={dlTheme.components.cardBlack}
      textColor={
        props.count >= props.goal ? dlTheme.colors.green : "currentcolor"
      }
    >
      <Box d="flex" alignItems="center">
        <IconButton
          aria-label="Decrement"
          icon={<FaMinusCircle />}
          onClick={decrement}
          disabled={props.count === 0}
        />
        <Heading sx={theme.typography.countHeading} mx={5}>
          {props.count}
        </Heading>
        <IconButton
          aria-label="Increment"
          icon={<FaPlusCircle />}
          onClick={increment}
        />
      </Box>
      <Box sx={theme.typography.condensed}>/ {props.goal}</Box>
    </CardWrapper>
  );
}
