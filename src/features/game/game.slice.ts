import { createStandaloneToast } from "@chakra-ui/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";
import { TOAST_OPTIONS } from "shared/data/toast.data";
import { EXP_LIST, MAX_LEVEL } from "./game.constants";
import { pluralizeString } from "shared/helpers/string.helpers";

export interface IGameState {
  level: number;
  exp: number;
}

const initialState: IGameState = {
  level: 1,
  exp: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addExp: (state, action: PayloadAction<number>) => {
      const initialLevel = state.level;
      if (initialLevel >= MAX_LEVEL) return;
      if (action.payload <= 0) return;

      let currentLevel = state.level;
      let currentExp = state.exp + action.payload;

      // keep adding levels and taking away EXP
      while (currentExp >= EXP_LIST[currentLevel]) {
        currentExp -= EXP_LIST[currentLevel];
        currentLevel++;
      }

      state.level = currentLevel;
      state.exp = currentExp;

      const toast = createStandaloneToast();

      if (initialLevel !== currentLevel) {
        const levelsGained = currentLevel - initialLevel;
        toast({
          ...TOAST_OPTIONS,
          title: "🎉 LEVEL UP 🎉",
          description: `You gained ${levelsGained} ${pluralizeString(
            "level",
            levelsGained,
          )}. You are now level ${currentLevel}!`,
          duration: null,
        });
      }

      toast({
        ...TOAST_OPTIONS,
        title: `+${action.payload} EXP`,
      });
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { addExp, resetGame } = gameSlice.actions;

// selectors
export const selectExp = (state: TAppState) => state.game.exp;
export const selectLevel = (state: TAppState) => state.game.level;
