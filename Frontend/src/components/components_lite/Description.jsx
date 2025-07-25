
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from '@/utils/data';
import store from '@/redux/store';
import { toast } from 'sonner';

const Description = () => {
    const params = useParams();
    const jobId = params.id;
    console.log("Job id in des",jobId);
    const {singleJob} = useSelector((store) => store.job);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {user} = useSelector((store) => store.auth);

    const isInitiallyApplied = singleJob?.application?.some(
        (application) => application.applicant === user?._id
    ) || false; 
    const [ isApplied, setIsApplied ] = useState(isInitiallyApplied);

    const applyJobHandler = async () => {
        try {
            const res =  await axios.get(`${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
                { withCredentials: true }
            );
            if(res.data.success) {
                setIsApplied(true);
                const updateSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]};
                dispatch(setSingleJob(updateSingleJob));
                console.log(res.data);
               toast.success(res.data.message); 
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJobs = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`,{
                    withCredentials: true,
                });
                if (res.data.status) {
                    console.log("Jobs from API:", res.data.job);
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
                }else {
                    setError("Failed to fetch jobs");
                }
            } catch (error) {
                console.error(error);
                setError(error.message || "An error occurred.");
            }finally {
                setLoading(false);
            }
        };
        fetchSingleJobs();
    },[jobId, dispatch, user?.id]);


    if (loading) {
        return <div className='max-w-7xl mx-auto my-10'>Loading job details...</div>;
    }

    // ✅ Handle error state
    if (error) {
        return <div className='max-w-7xl mx-auto my-10 text-red-600'>{error}</div>;
    }

    // ✅ Prevent crash if job data isn't loaded yet
    if (!singleJob) {
        return <div className='max-w-7xl mx-auto my-10'>No job found.</div>;
    }

  return (
    <div>
        <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
           <div>
           <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
            <div className='flex gap-2 items-center mt-4'>
        <Badge className={"text-blue-600 font-bold"} variant={"ghost"}>{singleJob?.position}</Badge>
        <Badge className={"text-[#FF6500] font-bold"} variant={"ghost"}>{singleJob?.salary}</Badge>
        <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>{singleJob?.location}</Badge>
        <Badge className={"text-black font-bold"} variant={"ghost"}>{singleJob?.jobType}</Badge>
            </div>
           </div>
            <div>
                <Button 
                onClick={isApplied ? null : applyJobHandler}
                disabled={isApplied} 
                className={`rounded-lg ${isApplied 
                    ? "bg-gray-600 cursor-not-allowed"
                    :"bg-[#6B3AC2] hover:bg-[#685983]"}`}>

                    {isApplied ? "Already applied": "Apply"}
                </Button>
            </div>
            </div>
            <h1 className='border-b-2 border-b-gray-400 font-medium py-4'>
            {singleJob.description}
    </h1>
        <div className='my-4'>
            <h1 className='font-bold my-1'>
                Role: <span className="pl-4 font-normal text-gray-800">{singleJob.position}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Location: <span className="pl-4 font-normal text-gray-800">{singleJob.location}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Salary: <span className="pl-4 font-normal text-gray-800">{singleJob.salary}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Experience: <span className="pl-4 font-normal text-gray-800">{singleJob.experience}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Job Type: <span className="pl-4 font-normal text-gray-800">{singleJob.jobType}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>
            </h1>
            <h1 className='font-bold my-1'>
                Post Date: <span className="pl-4 font-normal text-gray-800">{singleJob.createdAt ? new Date(singleJob.createdAt).toLocaleDateString('en-us',{
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : 'Unknown'}</span>
            </h1>
        </div>

        </div>
    </div>
  );
};

export default Description;