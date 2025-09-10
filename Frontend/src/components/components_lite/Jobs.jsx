
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import FilterCard from './Filtercard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];



const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector ((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }
  
  const filteredJobs = allJobs.filter((job) => {
      const query = searchedQuery.toLowerCase();
      return (
        job.title?.toLowerCase().includes(query) ||
        job.description?.toLowerCase().includes(query) ||
        job.location?.toLowerCase().includes(query) ||
        String(job.experience || "").toLowerCase().includes(query) ||
        job.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);



  return (
    <div>
        <Navbar />
            
        <div className='max-w-9/10 mx-auto mt-5'>
            <div className='flex gap-5'>
 
        <div className='w-24 flex-shrink-0'>
            <FilterCard />
            </div>
            { filterJobs.length <= 0 ? (
                <span className=''>Job not found</span>
            ) : ( 
               <div className='flex-1'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'> 
                  {filterJobs.map((job) => (
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={job.id}
                  >
                    <Job job={job} />
                  </motion.div>
                  
                  ))}    
                 </div>
               </div>  
            )}
            </div>   
        </div>
    </div>
  );
};

export default Jobs;