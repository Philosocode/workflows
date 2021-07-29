import { useState } from "react";
import { Box, Grid, GridItem, Heading, Input } from "@chakra-ui/react";

interface IProps {
  hooks: string[];
  onSelect: (hook: string) => void;
}
export function HookSelectGrid(props: IProps) {
  const [filterText, setFilterText] = useState("");

  function getFilteredHooks() {
    if (filterText.trim() === "") return props.hooks;

    const filterTrimLower = filterText.trim().toLowerCase();

    return props.hooks.filter((hook) =>
      hook.toLowerCase().includes(filterTrimLower.toLowerCase()),
    );
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterText(event.target.value);
  }

  return (
    <div>
      <Input
        onChange={handleInputChange}
        placeholder="Type to filter hooks"
        variant="flushed"
        _focus={{ borderColor: "green.500" }}
      />
      <Grid mt={5} templateColumns="repeat(3, 1fr)" gap={5}>
        {getFilteredHooks().length === 0 && (
          <Heading size="sm" fontWeight="medium">
            No hooks found.
          </Heading>
        )}

        {getFilteredHooks().map((hook) => (
          <GridItem key={hook}>
            <Box
              border="1px solid"
              borderColor="gray.100"
              bg="gray.50"
              cursor="pointer"
              h="100%"
              my={2}
              p={4}
              rounded="md"
              shadow="sm"
              onClick={() => props.onSelect(hook)}
              _hover={{ bg: "gray.100" }}
            >
              {hook}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
