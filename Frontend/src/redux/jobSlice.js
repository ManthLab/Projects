
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        allJobs: [],
        singleJob: null,
        searchedQuery: "", // Important
      };


const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setAllJobs(state, action){
            state.allJobs = action.payload;
    },
    setSingleJob(state, action){
        state.singleJob = action.payload;
    },
},
});

export const { setAllJobs, setSingleJob, setSearchedQuery } = jobSlice.actions;

export default jobSlice.reducer;