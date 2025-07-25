import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Categories from './Categories';
import LatestJobs from './LatestJobs';
import JobCards from './JobCards';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {loading, error } = useGetAllJobs(); // Trigger data fetch.
  const jobs = useSelector((state) => state.jobs.allJobs); //Acces the jobs array from the store.

  const {user} = useSelector((store) => store.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if(user?. role === "Recruiter") {
      navigate('/admin/companies')
    }
  },[])
  return (
    <div>
        <Navbar></Navbar>
        <Header />
        <Categories />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <LatestJobs jobs={jobs} />}
        <LatestJobs />
        <Footer />
    </div>
  );
};

export default Home;