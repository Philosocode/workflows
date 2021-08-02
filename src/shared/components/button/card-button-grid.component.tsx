import { Grid, GridProps } from "@chakra-ui/react";

interface IProps extends GridProps {
  children: React.ReactNode;
}
export function CardButtonGrid(props: IProps) {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      columnGap={{ base: 5, md: 10 }}
      rowGap={5}
      {...props}
      w="full"
    />
  );
}
