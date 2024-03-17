'use client'
import React from 'react'
import {
    BackpackIcon,
    CalendarIcon,
    Component1Icon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    HomeIcon,
    LayersIcon,
    PersonIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import { PiCrownLight, PiDiamondsFourThin, PiStackThin, PiSuitcaseThin, PiUsersThin } from "react-icons/pi";
import { CiHome } from 'react-icons/ci';
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
    <div className='hidden md:w-[250px] md:block h-full fixed inset-0 '>
      <div className='w-ful shadow-md border border-b-0 h-20 px-5  items-center flex'>LOGOX</div>
     
    <Command className="rounded-lg border shadow-md ">
      <CommandInput placeholder="search here..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem className="cursor-pointer">
            <CiHome  className="mr-2 h-4 w-4" />
            <span  className="text-black"><Link href="/">Home</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiCrownLight  className="mr-2 h-4 w-4" />
            <span  className="text-black"><Link href="/services">Services</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiStackThin className="mr-2 h-4 w-4" />
            <span  className="text-black"><Link href="/projects">Projects</Link></span>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
            <label  className="text-black"><Link href="/skills">Skills</Link></label>
             
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiUsersThin className="mr-2 h-4 w-4" />
            <span  className="text-black"><Link href="/testimonials">Testimonials</Link></span>
        
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          
          <CommandItem className="cursor-pointer">
            <GearIcon className="mr-2 h-4 w-4" /> 
            <span  className="text-black">Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>


    </div>
    
    <Sheet>
  <SheetTrigger className='md:hidden fixed  top-2 left-2'>Open</SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>Brandx</SheetTitle>
      <SheetDescription>
         
      </SheetDescription>
    </SheetHeader>

    <Command className="rounded-lg border shadow-md ">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <CiHome  className="mr-2 h-4 w-4" />
            <span  className="text-black">Home</span>
          </CommandItem>
          <CommandItem  className=' cursor-pointer'>
            <PiCrownLight  className="mr-2 h-4 w-4" />
            <span  className="text-black cursor-pointer"><Link href={"/services"}>Services</Link></span>
          </CommandItem>
          <CommandItem>
            <PiStackThin className="mr-2 h-4 w-4" />
            <span  className="text-black">Projects</span>
          </CommandItem>
          <CommandItem>
            <PiDiamondsFourThin   className="mr-2 h-4 w-4" />
            <label  className="text-black">Skills</label>
             
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <PiUsersThin className="mr-2 h-4 w-4" />
            <span  className="text-black">Testimonials</span>
        
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          
          <CommandItem className="cursor-pointer">
            <GearIcon className="mr-2 h-4 w-4" /> 
            <span  className="text-black">Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

  </SheetContent>
</Sheet>

    </>
  )
}

export default Sidebar