import { THookHash } from "../logic/hook.types";

export function generateHookHash(prompts: string[], prefix: string) {
  return prompts.reduce<THookHash>((hash, prompt, index) => {
    const id = `${prefix}-${index}`;

    hash[id] = {
      id,
      prompt,
    };

    return hash;
  }, {});
}
