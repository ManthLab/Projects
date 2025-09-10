import React from "react";
import JobCards from "./JobCards";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LatestJobs = () => {
  const allJobs = useSelector(
    (state) => state.jobs?.allJobs || [],
    shallowEqual
  );
  console.log("Jobs received in LatestJobs:", allJobs);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#024CAA]">Latest & Top </span>
        Job Openings
      </h2>

      {/* {Job Cards} */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
                <JobCards key={job._id} job={job}></JobCards>
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              )
            )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
