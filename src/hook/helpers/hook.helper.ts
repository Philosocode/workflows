import { random } from "lodash";

import { allHooksArray } from "hook/data/hooks.data";

export function getRandomHook(currentHook: string = "") {
  const currHook = currentHook.trim().toLowerCase();
  let hookToReturn: string = "";

  while (!hookToReturn) {
    const randomIndex = random(0, allHooksArray.length - 1);
    const randomHook = allHooksArray[randomIndex];

    if (randomHook.toLowerCase() !== currHook) {
      hookToReturn = randomHook;
    }
  }

  return hookToReturn;
}
