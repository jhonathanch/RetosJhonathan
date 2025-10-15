import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import postsReducer from "./slices/postsSlice";
import notificationsReducer from "./slices/notificationsSlice";
import messagesReducer from "./slices/messagesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    notifications: notificationsReducer,
    messages: messagesReducer,
  },
});

export default store;
