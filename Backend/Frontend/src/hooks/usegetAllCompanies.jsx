
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCompanies } from "@/redux/companyslice";

const usegetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        if(res.data.success){
            dispatch(setCompanies(res.data.companies))
            console.log("Companies API response:",res.data);
        }
      } catch (error) {
        console.error("Error fetching company:", error);
        setError(error.message || "An error occured.");
      }
    };
      fetchCompanies();
  }, []);
};
export default usegetAllCompanies;
