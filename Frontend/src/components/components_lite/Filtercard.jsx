
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const filterData = [
  {
  filterType: "Location",
  array: [
    "Delhi",
    "Mumbai",
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Noida",
    "Gurgaon",
    "Remote",
  ],
},
{
  filterType: "Industry",
  array:["IT", "Finance", "Marketing", "Healthcare", "Education", "Manufacturing"],
},
{
  filterType: "Experience",
  array: ["0-3 Years", "3-5 Years", "5-7 Years", "7+ Years"],
},
{
  filterType: "Salary",
  array: ["0-50k", "50-100k", "100-150k", "150-200k", "200k+"],
 },
];

const Filter = () => {
  return (
    <div className='w-full bg-white rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {filterData.map((data) => (
          <div key={data.filterType}>
           <h2 className='font-bold text-lg'>{data.filterType}</h2>
           {
            data.array.map((item) => (
              
                <div  key={item} className='flex items-center space-x-2 my-2'>
                  <RadioGroupItem value={item}></RadioGroupItem>
                  <label>{item}</label>
                </div>
            )
          )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;