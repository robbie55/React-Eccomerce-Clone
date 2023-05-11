import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchKey: "",
  },
  reducers: {
    setSearch(state, action) {
      const searchQuery = action.payload;

      state.searchKey = searchQuery;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
