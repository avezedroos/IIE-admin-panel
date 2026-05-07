import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salesData: [],
  filteredData: [],
  loading: false,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.salesData = action.payload;
      state.filteredData = action.payload;
    },

    addSale: (state, action) => {
      state.salesData.unshift(action.payload);
      state.filteredData.unshift(action.payload);
    },

    filterBySearch: (state, action) => {
      const query = action.payload.toLowerCase();

      state.filteredData = state.salesData.filter(item =>
        item.customerName.toLowerCase().includes(query) ||
        item.contactNumber.includes(query)
      );
    },

    filterByPayment: (state, action) => {
      const method = action.payload;

      if (!method) {
        state.filteredData = state.salesData;
      } else {
        state.filteredData = state.salesData.filter(
          item => item.paymentMethod === method
        );
      }
    },
  },
});

export const { setSales, addSale, filterBySearch, filterByPayment } = salesSlice.actions;
export default salesSlice.reducer;