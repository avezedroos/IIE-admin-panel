import { createSlice } from "@reduxjs/toolkit";


// 🔥 Get today's date in YYYY-MM-DD format
const todayDate = new Date().toISOString().split("T")[0];
const initialState = {
  filter:{
    date:todayDate,
  }
};

const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
  // ✅ Set single filter field
    setFilter: (state, action) => {
      const { key, value } = action.payload;

      state.filter[key] = value;
    },
  }

  });

  export const { setFilter } = metaSlice.actions;
  export default metaSlice.reducer;