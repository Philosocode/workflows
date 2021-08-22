import create from "zustand";

import { IGameState, IGameStore } from "./game.types";
import { gameActions } from "./game.actions";
import { ELocalStorageKeys, getLocalStorage } from "services/local-storage";

const initialState: IGameState = getLocalStorage(ELocalStorageKeys.Game) ?? {
  exp: 0,
  level: 0,
};

console.log(initialState);

export const useGameStore = create<IGameStore>((set) => ({
  ...initialState,
  ...gameActions(set),
}));
