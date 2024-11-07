import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trigger } from "../types/trigger";

interface TriggerState {
  activeTriggers: Set<Trigger>;
}

const initialState: TriggerState = {
  activeTriggers: new Set(),
};

const triggerSlice = createSlice({
  name: "triggers",
  initialState,
  reducers: {
    activateTrigger(state, action: PayloadAction<Trigger>) {
      state.activeTriggers.add(action.payload);
    },
  },
});

export const { activateTrigger } = triggerSlice.actions;
export default triggerSlice.reducer;
