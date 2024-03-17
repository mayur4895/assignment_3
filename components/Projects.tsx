'use client'

import { useUserStore } from '@/hooks/Apistore';
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
const Projects = () => {

    
  const [Projects, setProjects] = useState<any>([]);
  const { data } = useUserStore();

  useEffect(() => {
    if (data) {
      setProjects(data[1].projects);
    }
  }, [data]);
  console.log(Projects);
  return (
    
    <div className='mt-10 px-5'>
        <h2 className=' font-semibold mb-5'>Projects</h2>
        <div className='flex flex-wrap gap-10'>
             {Projects.map((project:any,index:any)=>{
              return(
                <Card key={index} className=' w-72  h-58  '>
                  <div className='h-40 w-72 relative'>
                  <Image src={project?.image?.url}  alt="project"  fill  className='  items-center absolute  object-cover '/>
                  </div>
                <CardHeader>
                  
                
                </CardHeader>
                
                <CardFooter className='flex flex-col gap-2'>
                <span className='font-semibold'>Technologies Used</span>
              <div className='flex flex-row'>
                
              {project?.techStack.map((skill:any)=>{
                     return(<p className='text-xs'>{skill},</p>)
                    })}
              </div>
                </CardFooter>
              </Card>
              )
             })}

        </div>
    </div>
  )
}

export default Projects