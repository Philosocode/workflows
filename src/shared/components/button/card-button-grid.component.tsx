import { Grid, GridProps } from "@chakra-ui/react";

interface IProps extends GridProps {
  children: React.ReactNode;
}
export function CardButtonGrid(props: IProps) {
  return <Grid templateColumns="repeat(2, 1fr)" gap={10} {...props} w="full" />;
}
