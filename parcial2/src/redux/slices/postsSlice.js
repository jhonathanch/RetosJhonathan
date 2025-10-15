import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const newPost = { ...post, createdAt: serverTimestamp() };
  const docRef = await addDoc(collection(db, "posts"), newPost);
  return { id: docRef.id, ...newPost };
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearPosts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;

