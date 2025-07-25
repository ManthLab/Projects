
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Button } from '../ui/button';

const Category = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Artificial Intelligence Engineer",
    "Cybersecurity Engineer",
    "Product Manager",
    "UX/UI Designer",
    "Graphics Enigineer",
    "Graphic Designer",
    "Video Editor",
]

const Categories = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold text-center text-[#024CAA]">
                Categories
            </h1>
            <p className='text-center text-gray-600'>
                Explore our extensive job market.
            </p>
        </div>
        <Carousel className="w-full max-w-xl mx-auto my-10">
        <CarouselContent>
            {Category.map((category, index) => {
                return (
                <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                    <Button>
                        {category}
                    </Button>
                </CarouselItem>
                );
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
        </Carousel>
    </div>
  );
};

export default Categories;