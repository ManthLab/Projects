
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Bookmark, BookMarked } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
    if (!job) return null; // Guard clause

    const {
        company,
        title,
        description,
        position,
        salary,
        location,
        jobType,
        _id,
        createdAt      
    } = job;

    const [isBookmarked, setIsBookmarked] = React.useState(false);

    const navigate = useNavigate();
    const daysAgo = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date()
        const timeDiff = currentTime.getTime() - createdAt.getTime();
        return Math.floor(timeDiff / (1000 * 3600 * 24));

    };
    
  return (
    
        <div className='p-5 rounded-medium shadow-xl bg-white border border-gray-200 cursor-pointer 
    hover:shadow-2xl hover:p-3'>
        <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-600'>{daysAgo(createdAt) === 0  ? "Today" :`${daysAgo(createdAt)} days ago`}</p>
        <Button variant="outline" className=" rounded-full" size="icon"
        onClick={() => setIsBookmarked(!isBookmarked)}>
            {isBookmarked ? <BookMarked /> : <Bookmark /> }
        </Button>
        </div>

      <div className='flex items-center pap-2 my-2'>
      <Button className="p-6" variant="outline" size="icon">
            <Avatar>
                <AvatarImage 
                src="https://tse1.mm.bing.net/th?id=OIP.bjbH60ijKiJWa0Y7YhrRGAHaHa&pid=Api&P=0&h=180"
                ></AvatarImage>
            </Avatar>
        </Button>

        <div>
        <h1 className='text-lg font-medium'>{company?.name}</h1>
        <p className='text-sm text-gray-600'>India</p>  
        </div>
        </div>


    
    <div>
        <h2 className='font-bold text-lg my-2'>{title}</h2>
        <p className='text-sm text-gray-600'>
        {description}  
        </p>
    </div>
    <div className='flex gap-2 items-center mt-4'>
        <Badge className={"text-blue-600 font-bold"} variant={"ghost"}>{position}</Badge>
        <Badge className={"text-[#FF6500] font-bold"} variant={"ghost"}>{salary}</Badge>
        <Badge className={"text-[#6B3AC2] font-bold"} variant={"ghost"}>{location}</Badge>
        <Badge className={"text-black font-bold"} variant={"ghost"}>{jobType}</Badge>
    </div>
    <div className='flex items-center gap-4 mt-4'>
        <Button 
        onClick={() => {
            navigate(`/description/${_id}`);
        }}
        variant="outline" className="font-bold round-sm" >
            Details
        </Button>
        <Button 
        variant="outline" className="bg-[#6B3AC2] text-white font-bold round-sm" >
            Save For Later
        </Button>

    </div>
    </div>
  );
};

export default Job;