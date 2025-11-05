import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const payload = { ...post, createdAt: serverTimestamp() };
  const ref = await addDoc(collection(db, "posts"), payload);
  return { id: ref.id, ...payload };
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], loading: false, error: null },
  reducers: { clearPosts(state){ state.items = []; } },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (s)=>{ s.loading = true; })
      .addCase(fetchPosts.fulfilled, (s,a)=>{ s.loading=false; s.items = a.payload; })
      .addCase(fetchPosts.rejected, (s,a)=>{ s.loading=false; s.error = a.error.message; })
      .addCase(addPost.fulfilled, (s,a)=>{ s.items.unshift(a.payload); });
  }
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
