import { SetState } from "zustand";
import produce from "immer";

import { ELocalStorageKeys, setLocalStorage } from "services/local-storage";
import { IGameStore } from "./game.types";
import { EXP_LIST, MAX_LEVEL } from "./game.constants";
import { TOAST_OPTIONS } from "shared/data/toast.config";
import { createStandaloneToast } from "@chakra-ui/react";
import { chakraTheme } from "shared/styles/chakra-theme";
import { pluralizeString } from "shared/helpers/string.helpers";

export function gameActions(set: SetState<IGameStore>) {
  return {
    addExp: (amount: number) => {
      set(
        produce((state) => {
          if (amount <= 0) return;

          const initialLevel = state.level;
          if (initialLevel >= MAX_LEVEL) return;

          let currentLevel = state.level;
          let currentExp = state.exp + amount;

          // keep adding levels and taking away EXP
          while (currentExp >= EXP_LIST[currentLevel]) {
            currentExp -= EXP_LIST[currentLevel];
            currentLevel++;
          }

          state.level = currentLevel;
          state.exp = currentExp;

          setLocalStorage(ELocalStorageKeys.Game, state);
          showExpToasts({ amount, currentLevel, initialLevel });
        }),
      );
    },
    resetGameStore: () => {
      set((state) => ({ ...state, exp: 0, level: 0 }));
    },
  };
}

function showExpToasts(args: {
  initialLevel: number;
  currentLevel: number;
  amount: number;
}) {
  const { amount, currentLevel, initialLevel } = args;

  const toast = createStandaloneToast({ theme: chakraTheme });
  if (initialLevel !== currentLevel) {
    const levelsGained = currentLevel - initialLevel;

    toast({
      ...TOAST_OPTIONS,
      title: "🎉 LEVEL UP 🎉",
      description: `You gained ${levelsGained} ${pluralizeString(
        "level",
        levelsGained,
      )}. You are now level ${currentLevel}!`,
      duration: 7000,
      isClosable: true,
    });
  }

  toast({
    ...TOAST_OPTIONS,
    title: `+${amount} EXP`,
  });
}
