
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

function useGetAllJobs() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((state) => state.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.status) {
          console.log("Jobs from API:", res.data.jobs);
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs");
        }
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
  return { loading, error };
}

export default useGetAllJobs;
