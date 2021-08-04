import { useState } from "react";
import { Grid, Heading } from "@chakra-ui/react";

import { InputWithLabel } from "form/components/input-with-label.component";
import { HookSelectGridItem } from "./hook-select-grid-item.component";

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
      <InputWithLabel
        id="filterHooks"
        label="Filter Hooks"
        onChange={handleInputChange}
        placeholder="Type to filter hooks..."
      />

      <Grid mt={5} templateColumns={{ md: "repeat(3, 1fr)" }} gap={5}>
        {getFilteredHooks().length === 0 && (
          <Heading size="sm" fontWeight="medium">
            No hooks found.
          </Heading>
        )}

        {getFilteredHooks().map((hook) => (
          <HookSelectGridItem
            key={hook}
            hook={hook}
            onClick={() => props.onSelect(hook)}
          />
        ))}
      </Grid>
    </div>
  );
}
