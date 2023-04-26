import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
    rest: (state, action) => {
      state.count = 0;
    },
  },
});
export const { increase, decrease, rest } = counterSlice.actions;
export default counterSlice.reducer;
