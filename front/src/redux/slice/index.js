import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  filteredCoins: [],
  coinType:""
};

const coinProjectSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    setFilteredCoins: (state, action) => {
      state.filteredCoins = action.payload
    },
    setCoinType: (state, action) => {
      state.coinType = action.payload
    }
  },
});

export const {
  setCoins,
  setFilteredCoins,
  setCoinType
} = coinProjectSlice.actions;
export default coinProjectSlice.reducer;
