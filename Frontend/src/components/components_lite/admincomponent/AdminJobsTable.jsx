import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );

  const navigate = useNavigate();
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
          job?.company?.name
            .toLowerCase()
            .includes(searchJobByText.toLowerCase())
        );
      });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  if (!companies) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Table>
        <TableCaption>Your recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <span>No Job Added</span>
              </TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.createdAt.split("T")[0] || "N/A"}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-full">
                      <div
                        onClick={() =>
                          navigate(`/admin/companies/${job?.company?._id}`)
                        }
                        className="flex items-center gap-2 w-fit cursor-pointer mb-1"
                      >
                        <Edit2 className="w-4 cursor-pointer" />
                        <span>Edit</span>
                      </div>
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center gap-2 w-fit cursor-pointer mt-1 "
                      >
                        <Eye className="w-4"></Eye>
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
