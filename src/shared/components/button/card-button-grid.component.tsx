import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

interface IProps extends SimpleGridProps {
  children: React.ReactNode;
}
export function CardButtonGrid(props: IProps) {
  return (
    <SimpleGrid
      columns={2}
      columnGap={{ base: 5, md: 10 }}
      rowGap={5}
      w="full"
      {...props}
    />
  );
}
