import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
   
    { id: 1, name: "Bus", icon: "icon-bus" },
    { id: 2, name: "Flights", icon: "icon-tickets" },
    { id: 3, name: "Cruise", icon: "icon-yatch" },
    { id: 4, name: "Holyday Rentals", icon: "icon-home" },
   

  ],
  currentTab: "Bus",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
