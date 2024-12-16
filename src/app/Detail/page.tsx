'use client'
import { faCogs, faGasPump, faHeart, faStar, faStarHalfAlt, faSyncAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from "next/image";
import image1 from "../../../public/ad1.png"
import image2 from "../../../public/ad2.png"
import image3 from "../../../public/RR.png"
import image4 from "../../../public/image1of2.png"
import image5 from "../../../public/image2of2.png"
import image6 from "../../../public/image3of2.png"
import detail1 from "../../../public/detail1.png"
import detail2 from "../../../public/detail2.png"
import detail3 from "../../../public/detail3.png"

const Detail = () => {
  return (
    <div className='bg-[#F6F7F9] flex'>
      <div className='bg-white text-black flex justify-start items-start mb-0 shadow-md p-4 font-medium'>
        <div className='w-64'>
            <div className='mb-6'>
            <h2 className="text-xs font-semibold mb-2 text-gray-500">TYPE</h2>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">Sport(10)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">SUV(12)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">MPV(16)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">Sedan(20)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">Coupe(14)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm ">Hatchback(14)</label>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-xs font-semibold mb-2 text-gray-500">CAPACITY</h2>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm0">2 Person (10)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm">4 Person (14)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm">6 Person (12)</label>
                </div>
                <div className='flex items-center mb-2'>
                    <input type="checkbox" className='text-blue-600' />
                    <label className="ml-2 text-sm">8 or More (16)</label>
                </div>
            </div>
            <div>
                    <div className=" top-0 left-0 text-gray-500 text-sm md-2">PRICE</div>
                <div className="relative w-3/4 p-4">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-1 bg-gray-300 rounded-full"></div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                </div>
                    <div className=" bottom-0 left-0 text-sm">Max. $100.00</div>
            </div>
        </div>
    </div>
        
    <div className='bg-white text-black flex flex-col justify-start items-start shadow-md p-4 font-sm'>
    
    <div className='flex-col'>
    <div className='flex'>
    <div className="bg-[#3563E9] text-white px-6 pt-6 h-96 w-full rounded-lg mb-2">
                    <div className='w-64'>
                        <h2 className="text-2xl font-semibold">Sports car with the best design and acceleration
                        </h2>
                        <p>Safety and comfort while driving a 
                        futuristic and elegant sports car
                        </p>
                    </div>
                    <div className='flex justify-center items-center object-contain h-[50%]'>
                        <Image src={image2} alt="Gray sports car" className='object-cover scale-x-[-1] w-3/4 h-3/4'/>
                    </div>
                </div>
   
                
<div className="bg-gray-100 flex justify-end">
    <div className="bg-white rounded-lg shadow-lg p-6 h-full w-full">
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-xl text-black font-bold">Nissan GT – R</h2>
                <div className="flex items-center mt-1">
                    <div className="flex text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />                    
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <span className="text-gray-500 text-sm ml-2">440+ Reviewer</span>
                </div>
            </div>
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </div>
        <p className="text-gray-600 mt-4">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500">
            <div>
                <span>Type Car</span>
                <p className="text-black font-semibold">Sport</p>
            </div>
            <div>
                <span>Capacity</span>
                <p className="text-black font-semibold">2 Person</p>
            </div>
            <div>
                <span>Steering</span>
                <p className="text-black font-semibold">Manual</p>
            </div>
            <div>
                <span>Gasoline</span>
                <p className="text-black font-semibold">70L</p>
            </div>
        </div>
        <div className="flex justify-between items-center mt-6">
            <div>
                <span className="text-2xl font-bold text-black">$80.00</span><span className="text-gray-500">/ days</span>
                <p className="text-gray-400 line-through">$100.00</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Rent Now</button>
        </div>
    </div>
</div>

     </div>
<div className="flex justify-start w-1/2 gap-x-4 mt-0">
    <div className="bg-white shadow-md rounded-lg object-contain">
        <Image alt='' src={detail1} className='h-[124px] w-[148px] object-cover'/>
    </div>
    <div className="bg-white shadow-md rounded-xl object-contain">
        <Image alt='' src={detail2} className='h-[124px] w-[148px] object-cover'/>
    </div>
    <div className="bg-white shadow-md rounded-xl object-contain">
        <Image alt='' src={detail3} className='h-[124px] w-[148px] object-cover'/>
    </div>
</div>
</div>
  

     



                {/* Row 1 */}
    <div className="bg-[#F6F7F9] text-gray-900">
        <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-400">Recent Car
                </h1>
                <a className="text-blue-600" href="/Category">View All
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <!-- Card 1 --> */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Koenigsegg
                        </h2>
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 w-6" />
                    </div>
                        <p className="text-sm text-gray-500 mb-4">Sport
                        </p>
                        <Image alt="White Koenigsegg car" className="w-full h-32 object-cover mb-4" height="150" src={image1} width="300"/>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />90L
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />Manual
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />2 People
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-lg font-semibold">$99.00
                                </span>
                                <span className="text-sm text-gray-500">/ day
                                </span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">Rent Now
                            </button>
                        </div>
                </div>
             {/* <!-- Card 2 --> */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                     <h2 className="text-lg font-semibold">Nissan GT - R
                     </h2>
                     <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
                    </div>
                        <p className="text-sm text-gray-500 mb-4">Sport
                         </p>
                        <Image alt="Silver Nissan GT-R car" className="p-3 w-full h-32 scale-x-[-1] object-cover mb-4"  src={image2}  />
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faGasPump} className='mr-1 w-4'/>80L
                        </div>
                        <div className="flex items-center">
                        <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />Manual
                        </div>
                        <div className="flex items-center">
                        <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />2 People
                        </div>
                    </div>
                     <div className="flex justify-between items-center">
                        <div>
                            <span className="text-lg font-semibold">$80.00
                            </span>
                            <span className="text-sm text-gray-500 line-through"> $100.00
                            </span>
                            <span className="text-sm text-gray-500">/ day
                            </span>
                        </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">Rent Now
                            </button>
                        </div>
                </div>
         {/* <!-- Card 3 --> */}
         <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                 Rolls - Royce
                </h2>
                <FontAwesomeIcon icon={faHeart} className="text-red-500 w-6" />
            </div>
                <p className="text-sm text-gray-500 mb-4">
                Sedan
                </p>
                <Image alt="Blue Rolls-Royce car" className="p-3 py-6 w-full h-32 scale-x-[-1] object-fill mb-4" src={image3}  width={220}/>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
                    70L
                </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />
                Manual
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />
                4 People
            </div>
         </div>
         <div className="flex justify-between items-center">
            <div>
                <span className="text-lg font-semibold">
                $96.00
                </span>
                <span className="text-sm text-gray-500">
                / day
                </span>
            </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Rent Now
                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* row 2 */}
     <div className="bg-[#F6F7F9] text-gray-900">
       <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-400">
                Recommendation Car
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Card 1 --> */}
                <div className="bg-white shadow-md rounded-lg p-4">
     <div className="flex justify-between items-center mb-2">
       <h2 className="text-lg font-semibold">
      All New Rush
       </h2>
       <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      SUV
     </p>
     <Image alt="" className="p-3 w-full h-40 object-cover mb-4" src={image4}/>
     <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
      <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
       70L
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />
       Manual
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />
       6 People
      </div>
     </div>
     <div className="flex justify-between items-center">
      <div>
       <span className="text-lg font-semibold">
        $72.00
       </span>
       <span className="text-sm text-gray-500">
        / day<br /> $80.00
       </span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
       Rent Now
      </button>
     </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="bg-white shadow-md rounded-lg p-4">
     <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">
       CR - V
      </h2>
      <FontAwesomeIcon icon={faHeart} className="text-red-500 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      SUV
     </p>
     <Image alt="" className="p-3 w-full h-40 scale-x-[-1] mb-4"  src={image5}  />
     <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
       <FontAwesomeIcon icon={faGasPump} className='mr-1 w-4'/>
       80L
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />
       Manual
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />
       6 People
      </div>
     </div>
     <div className="flex justify-between items-center">
      <div>
       <span className="text-lg font-semibold">
        $80.00
       </span>
       <span className="text-sm text-gray-500">
        / day
       </span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
       Rent Now
      </button>
     </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="bg-white shadow-md rounded-lg p-4">
     <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">
       All New Terios
      </h2>
      <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      SUV
     </p>
     <Image alt="" className="p-3 w-full h-40 object-cover mb-4" src={image6}  width={220}/>
     <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
      <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
       90L
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />
       Manual
      </div>
      <div className="flex items-center">
      <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />
       6 People
      </div>
     </div>
     <div className="flex justify-between items-center">
      <div>
       <span className="text-lg font-semibold">
        $74.00
       </span>
       <span className="text-sm text-gray-500">
        / day
       </span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
       Rent Now
      </button>
     </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Detail
