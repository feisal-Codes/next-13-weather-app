import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
const About = () => {
  return (
    <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
     <Link href="/" className='mb-9'>
        <AiOutlineArrowLeft size ={15}/>
     </Link>
      <div className='lg:w-10/12 w-full'>
        <p className='font-normal mb-4 mt-5 text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer'>
         
          About
        </p>
        <h4 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-3xl text-2xl lg:leading-10 leading-9 mt-2'>
          About the app
        </h4>
        <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
          The app consumes open weather api to load weather details for
          different parts of the world. We consume the geo location api to get
          the coordinates of a location and pass those to the main weather api
        </p>
        <h4 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-3xl text-2xl lg:leading-10 leading-9 mt-2'>
          The technologies used
        </h4>
        <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
          As per the guidelines, the technology use are <strong> Typescript </strong>
          <strong> tailwind </strong> css for styling, <strong> next 13 </strong>
          for the frontend, <strong> redux </strong> for state management and
          <strong> jest for testing</strong> and <strong>figma</strong> for the
          design
        </p>
        <h4 className='xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-3xl text-2xl lg:leading-10 leading-9 mt-2'>
          Optimizations
        </h4>
        <p className='font-normal text-base leading-6 text-gray-600 mt-6'>
          To avoid unneccessary api calls , we are storing the geolocation data,
          that is the longitude and the latitude in redux store in the first
          call, and we access the store on subsequent calls of the same location
          to get the latitude and the longitude. N/B only the geo loaction api
          call is optimized as the return is static and does not chnage
        </p>
      </div>
    </div>
  )
}

export default About
