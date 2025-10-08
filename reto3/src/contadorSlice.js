import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1; 
    },
  },
});

export const { increment, decrement } = contadorSlice.actions;
export default contadorSlice.reducer;
