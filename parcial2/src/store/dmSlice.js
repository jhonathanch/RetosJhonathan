import { createSlice } from "@reduxjs/toolkit";

const dmSlice = createSlice({
  name: "directMessages",
  initialState: {
    queue: [],
  },
  reducers: {
    enqueueMessage: (state, action) => {
      state.queue.push(action.payload);
    },
    dequeueMessage: (state) => {
      state.queue.shift();
    },
  },
});

export const { enqueueMessage, dequeueMessage } = dmSlice.actions;
export default dmSlice.reducer;
