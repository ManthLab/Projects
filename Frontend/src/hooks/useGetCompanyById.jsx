import React from 'react'
import { COMPANY_API_ENDPOINT } from '@/utils/data';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSingleCompany } from '@/redux/companyslice';

const useGetCompanyById = (companyId) => {
 
        const dispatch = useDispatch();
        
        useEffect(() => {
            const fetchSingleCompany = async () => {
                try {
                    const res = await axios.get(`${COMPANY_API_ENDPOINT}/get/${companyId}`,{
                        withCredentials: true,
                    });
                        dispatch(setSingleCompany(res.data.company));
                } catch (error) {
                    console.error("Error fetching company:", error);
                }
            };
            if (companyId) {
                fetchSingleCompany();
            }
            }, [companyId, dispatch]);
    }

export default useGetCompanyById;