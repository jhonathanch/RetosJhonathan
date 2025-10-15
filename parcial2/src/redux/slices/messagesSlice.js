import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { queue: [] },
  reducers: {
    enqueueMessage: (state, action) => {
      state.queue.push(action.payload); 
    },
    dequeueMessage: (state) => {
      state.queue.shift();
    },
    clearMessages: (state) => {
      state.queue = [];
    },
  },
});

export const { enqueueMessage, dequeueMessage, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
