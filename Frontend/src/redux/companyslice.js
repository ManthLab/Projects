import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    // initial state for company details.
    singleCompany: {},
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    //reducers for company details.
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    searchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

// Export the action

export const { setSingleCompany, setCompanies, searchCompanyByText } = companySlice.actions;

// Export the reducer
export default companySlice.reducer;

//Export the companySlice if needed.
export { companySlice };
