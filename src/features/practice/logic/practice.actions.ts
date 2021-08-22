import { SetState } from "zustand";
import { omit } from "lodash";
import produce from "immer";

import {
  IPracticeActions,
  IPracticeState,
  IPracticeStore,
} from "./practice.types";
import { initialState } from "./practice.constants";

export function practiceQuestionActions(
  set: SetState<IPracticeStore>,
): IPracticeActions {
  return {
    createTopic: (topic) => {
      set(
        produce((state: IPracticeState) => {
          state.topics[topic.id] = topic;
          state.topicIds.unshift(topic.id);
        }),
      );
    },
    setAmount: (amount) => {
      set(
        produce((state: IPracticeState) => {
          if (amount.min <= 0) return;
          if (amount.max < amount.min) return;

          state.amount = amount;
        }),
      );
    },
    setPracticeMode: (mode) => {
      set(
        produce((state: IPracticeState) => {
          state.practiceMode = mode;
        }),
      );
    },
    updateTopic: (payload) => {
      set(
        produce((state: IPracticeState) => {
          const { id, updates } = payload;

          state.topics[id] = {
            ...state.topics[id],
            ...updates,
          };
        }),
      );
    },
    deleteTopic: (topicId: string) => {
      set(
        produce((state: IPracticeState) => {
          state.topics = omit(state.topics, [topicId]);
          state.topicIds = state.topicIds.filter((id) => id !== topicId);
        }),
      );
    },
    reset: () => {
      set((state) => ({ ...state, ...initialState }));
    },
  };
}
