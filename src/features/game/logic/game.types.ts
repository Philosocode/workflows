export interface IGameState {
  level: number;
  exp: number;
}

export interface IGameActions {
  addExp: (amount: number) => void;
  resetGameStore: () => void;
}

export interface IGameStore extends IGameState, IGameActions {}
