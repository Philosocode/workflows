import { Progress, ProgressProps } from "@chakra-ui/react";

interface IProps extends ProgressProps {
  currentValue: number;
  maxValue: number;
}
export function ProgressBar(props: IProps) {
  const value = Math.floor((props.currentValue / props.maxValue) * 100);

  return (
    <Progress
      value={value}
      colorScheme="green"
      size="sm"
      borderRadius="3xl"
      {...props}
    />
  );
}
