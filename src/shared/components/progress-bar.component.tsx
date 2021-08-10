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
      size="sm"
      borderRadius="3xl"
      {...rest}
    />
  );
}
