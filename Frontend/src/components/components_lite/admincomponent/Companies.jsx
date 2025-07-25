import React from 'react'
import Navbar from '../Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between my-5'>
                <Input className="w-fit" placeholder="Filter by Name"></Input>
                <Button onClick={()=> navigate("/admin/companies/create")}>
                  Add Company
                </Button>
            </div>
            <div>
                <CompaniesTable />
            </div>
        </div>
    </div>
  )
}

export default Companies;