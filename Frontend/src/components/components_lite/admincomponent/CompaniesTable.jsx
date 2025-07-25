import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit2, MoreHorizontal } from 'lucide-react';
import React from 'react'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>Your recent registered Companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src='https://tse2.mm.bing.net/th/id/OIP.3mf2dmUA25WajGkdTu9LfwHaHa?pid=Api&P=0&h=180' alt='company logo' />
                    </Avatar>
                </TableCell>   
                <TableCell>Google</TableCell>
                <TableCell>21-05-2025</TableCell>
                <TableCell className="text-right">
                    <Popover>
                        <PopoverTrigger className='cursor-pointer'><MoreHorizontal /></PopoverTrigger>
                        <PopoverContent className='w-25'>
                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4 cursor-pointer' />
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable;