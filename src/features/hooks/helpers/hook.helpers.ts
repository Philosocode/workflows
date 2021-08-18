import { THookPromptHash } from "../logic/hook.types";

export function generateHookPromptHash(prompts: string[], prefix: string) {
  return prompts.reduce<THookPromptHash>((hash, prompt, index) => {
    const id = `${prefix}-${index}`;

    hash[id] = {
      id,
      prompt,
    };

    return hash;
  }, {});
}
