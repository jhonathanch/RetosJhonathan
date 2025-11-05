import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: { stack: [] },
  reducers: {
    pushNotification(state, action) { state.stack.push(action.payload); },
    popNotification(state) { state.stack.pop(); },
    clearNotifications(state) { state.stack = []; },
  }
});

export const { pushNotification, popNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
