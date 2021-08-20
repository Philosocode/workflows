import { generateHookHash } from "../helpers/hook.helpers";

const connectPrompts = [
  "Can you think of a simile, analogy, or metaphor?", // connect-0
  "What does this remind you of?",
  "Is this your first time encountering this? If not, where have you encountered this before?",
  "Do you have any personal experience with this?",
  "How can you apply this to your own life?",
  "What questions does this raise for you?",
  "What are some practical / real-world applications of this?",
  "How would you prove this?",
  "How would you challenge this?",
  "What do you know that supports this?",
  "How does this fit in with the rest of what you know about this subject?",
];

const processPrompts = [
  "What are the key things you need to remember?", // process-0
  "How would you explain this so a 5 year old can understand?", // process-1
  "Can you think of (simple) concrete examples?", // process-2
  "Why is this important?",
  "How can you express this in your own words?",
  "On a scale from 1-10, how well do you understand this?",
  "What's hard about this? Why is this hard?",
  "How do you feel about this? Is this surprising? Interesting?",
  "Do you agree or disagree? Why?",
  "How does this work? Why does it work like this?",
  "Can you create an image or visualization to represent this?",
  "Write down everything you know about this topic/concept in as much detail as possible",
];

export const connectHooks = generateHookHash(connectPrompts, "connect");
export const processHooks = generateHookHash(processPrompts, "process");
export const commonHookIds = [
  "process-0",
  "process-1",
  "process-2",
  "connect-0",
];

export const allHooks = {
  ...connectHooks,
  ...processHooks,
};

export const allHookPrompts = [...connectPrompts, ...processPrompts];
