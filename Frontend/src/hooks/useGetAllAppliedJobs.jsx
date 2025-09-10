import { setAllAppliedJobs } from '@/redux/jobSlice';
import { APPLICATION_API_ENDPOINT } from '@/utils/data';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get`,{
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if(res.data.success){
          console.log("Fetched applied jobs:", res.data.application);
          dispatch(setAllAppliedJobs(res.data.application));
        }
      }catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  },[dispatch]);
  return null;
}

export default useGetAppliedJobs;