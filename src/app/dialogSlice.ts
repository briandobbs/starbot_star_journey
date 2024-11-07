import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogMessages } from "../data/dialogData";

interface DialogState {
  currentIndex: number;
  filteredDialog: typeof dialogMessages;
}

const initialState: DialogState = {
  currentIndex: 0,
  filteredDialog: [],
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    nextDialog(state) {
      if (state.currentIndex < dialogMessages.length - 1) {
        state.currentIndex += 1;
      }
    },
    setFilteredDialog(state, action: PayloadAction<typeof dialogMessages>) {
      state.filteredDialog = action.payload;
    },
  },
});

export const { nextDialog, setFilteredDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
