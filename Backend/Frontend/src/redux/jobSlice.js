import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  singleJob: null,
  allAdminJobs: [],
  allAppliedJobs: [], 
  searchedQuery: "", // Important
  searchJobByText: "",
  
};

console.log("Job slice initial state:", initialState);

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs(state, action) {
      state.allJobs = action.payload; // Udate state with fetched jobs.
    },
    setSingleJob(state, action) {
      state.singleJob = action.payload; // Update state with single job.
    },
    setAllAdminJobs(state, action) {
      state.allAdminJobs = action.payload; // Update state with all admin jobs.
    },
    setsearchJobByText(state, action) {
      state.searchJobByText = action.payload; // Update state with searched query.
    },
    setAllAppliedJobs(state, action) {
      state.allAppliedJobs = action.payload; // Update state with all applied jobs.
    },
    setSearchedQuery(state, action) {
      state.searchedQuery = action.payload; // Update state with searched query.
    },
    
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setsearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
} = jobSlice.actions;

export default jobSlice.reducer;
