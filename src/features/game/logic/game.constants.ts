export const MAX_LEVEL = 100;

export const EXP_LIST: number[] = [20];
for (let level = 1; level <= MAX_LEVEL; level++) {
  EXP_LIST[level] = Math.ceil(Math.pow(level, 1.5) + 20);
}

export const EXP_RATES = {
  duckDebug: 3,
  getUnstuck: 1,
  hook: 0.5,
  note: 2,
  practiceQuestion: 0.5,
  practiceTime: 1,
  preStudyRoutine: 5,
  problemSolving: 10,
  studyBlocks: 2,
};
