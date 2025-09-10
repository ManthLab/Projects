import React, { useState } from "react";
import Navbar from "../Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companyslice";

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Company Name</h1>
          <p className="text-gray-600">Company Description</p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          placeholder="Company Name"
          className="my-2"
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button className="cursor-pointer" onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
