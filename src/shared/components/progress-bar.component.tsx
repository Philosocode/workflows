import { Progress, ProgressProps } from "@chakra-ui/react";

interface IProps extends ProgressProps {
  currentValue: number;
  maxValue: number;
}
export function ProgressBar({ currentValue, maxValue, ...rest }: IProps) {
  const value = Math.floor((currentValue / maxValue) * 100);

  return (
    <Progress
      value={value}
      colorScheme="green"
      h={{ base: 1, md: 2 }}
      borderRadius="3xl"
      {...rest}
    />
  );
}
