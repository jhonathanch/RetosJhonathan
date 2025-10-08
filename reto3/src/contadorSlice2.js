import { contadorSlice2 } from "@reduxjs/toolkit";

const contadorSlice2 = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload; 
    },
  },
});

export const { increment, decrement, incrementBy } = contadorSlice2.actions;
export default contadorSlice2.reducer;
