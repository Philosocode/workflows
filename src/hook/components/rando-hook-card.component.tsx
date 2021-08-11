import { commonHooks } from "hook/shared/hooks.data";

import { RandoCard } from "shared/components/card/rando-card.component";

export function RandoHookCard() {
  return (
    <RandoCard ariaLabel="New Hook" heading="Rando Hook" values={commonHooks} />
  );
}
