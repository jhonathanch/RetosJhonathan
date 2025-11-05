import { createSlice } from "@reduxjs/toolkit";

const dmSlice = createSlice({
  name: "dm",
  initialState: { queue: [] },
  reducers: {
    enqueue(state, action) { state.queue.push(action.payload); },
    dequeue(state) { state.queue.shift(); },
    clearQueue(state) { state.queue = []; },
  }
});

export const { enqueue, dequeue, clearQueue } = dmSlice.actions;
export default dmSlice.reducer;
    