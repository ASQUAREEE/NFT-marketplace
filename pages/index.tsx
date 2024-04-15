import CreatorCard from "@/components/CreatorCard";
import Banner from "@/components/helper/Banner";

import {useState, useEffect, useRef} from "react";
import images from "../assets"
import { makeId } from "@/utils/makeId";
import Image from "next/image";
import { useTheme } from "next-themes";

type ImageKey = keyof typeof images;

export default function Home() {

  const [hideButton, setHideButton] = useState(false);
  
  const parentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const {theme} = useTheme();
  
  const handleScroll = (direction:string) => {

    const current = scrollRef.current;

  const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

  if (current) {
    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  }

  }

  const isScrollable = () => {
    const {current} = scrollRef;
    const {current: parent} = parentRef;

    if (current && parent) {
      if (current?.scrollWidth >= parent?.offsetWidth) {
        setHideButton(false);
      }

     else {
      setHideButton(true);
     }
    }
  }


  useEffect(()=>{
  isScrollable();
  window.addEventListener('resize', isScrollable);

  return () => {
    window.removeEventListener('resize',isScrollable);
  }
  })

  return (
    <>
  <div className="flex justify-center sm:px-4 p-12">

    <div className="w-full minmd:w-4/5">

     <Banner 
     name = "Discover, collect, and sell extraordinary NFTs"

     parentStyle="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"

     childStyle="md:text-4xl sm:text-2xl xs:text-xl text-left"
     />

     <div>
      <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Best Creators</h1>

      <div className="relative flex-1 max-w-full flex mt-3"
      ref={parentRef}
      >
       <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
       ref={scrollRef}
       >

       {
        [6,7,8,9,10].map((i)=> (
          <CreatorCard 
          key={`creator-${i}`}
          rank={i}
          creatorImage={images[`creator${i}` as ImageKey]}
          creatorName={`0x${makeId(3)}....${makeId(3)}`}
          creatorEths={10- i*0.5}
          />
        ))
       }

       {!hideButton && <>
       <div
       onClick={()=>{handleScroll('left')}}
       className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0">
        <Image 
        src={images.left}
        alt='arrow left'
        layout="fill"
        objectFit="contain"
        className={theme === 'light' ? "filter invert" :""}
        />
       </div>

       <div
       onClick={()=>{handleScroll('right')}}
       className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0">
        <Image 
        src={images.right}
        alt='arrow left'
        layout="fill"
        objectFit="contain"
        className={theme === 'light' ? "filter invert" :""}
        />
       </div>
       </>}

        </div>   

      </div>

     </div>

    </div>

  </div>
    </>
  );
}
