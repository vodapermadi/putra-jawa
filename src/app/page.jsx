"use client"
import { Circle } from "@/components";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Circle />
      <div className="w-full flex justify-center items-center h-full z-50">
        <div className="w-5/6 flex md:flex-row flex-col-reverse justify-between items-center">
          <div className="md:w-1/2 w-full h-full flex gap-2 flex-col">
            <TypeAnimation
              sequence={[
                'has a simple user experience.',
                1500,
                'has a fast user experience.',
                1500,
                'has a powerful user experience.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="md:text-4xl text-3xl text-gray-700 font-semibold capitalize"
              repeat={Infinity}
            />
            <p className="text-sm md:text-base ">
              Discover the extraordinary in simplicity with our service. We provide fast and powerful solutions tailored to meet your every need. Elevate your experience and efficiency with our unparalleled service excellence.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full">
            <Image src={'/hero-icon.png'} priority alt="..." width={1500} height={1500} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
