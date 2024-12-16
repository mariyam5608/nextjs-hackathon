import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGasPump, faHeart, faSyncAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import image1 from "../../public/ad1.png"
import image2 from "../../public/ad2.png"
import image3 from "../../public/RR.png"
import image4 from "../../public/image1of2.png"
import image8 from "../../public/image1of3.png"
import image9 from "../../public/image2of3.png"
import image5 from "../../public/image2of2.png"
import image6 from "../../public/image3of2.png"
import image7 from "../../public/image4of2.png"

const Home = () => {
  return (
    <>
      <div className="bg-[#F6F7F9]">
            <div className="container mx-auto p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#54A6FF] text-white p-6 h-96 rounded-lg">
                <div className='w-72'>
                    <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental
                    </h2>
                    <p className="mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.
                    </p>
                    <button className="bg-[#3563E9] hover:bg-[#3563E9] mb-6 text-white font-bold py-2 px-4 rounded">Rental Car
                    </button>
                </div>
                <div className='flex justify-center'>
                    <Image src={image1} alt="White sports car" width="406" />
                </div>
                </div>
 
                <div className="bg-[#3563E9] text-white p-6 h-96 rounded-lg">
                    <div className='w-72'>
                        <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at a low price
                        </h2>
                        <p className="mb-4">Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                        <button className="bg-[#54A6FF] hover:bg-[#54A6FF] text-white font-bold py-2 px-4 rounded">Rental Car
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image src={image2} alt="Gray sports car" className='scale-x-[-1] w-[340px]'/>
                    </div>
                </div>
            </div>


            <div className="bg-gray-100 flex justify-center items-center w-full">
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-full">
        {/* <!-- Pick-Up Section --> */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4 w-full md:w-full">
            <div className="flex items-center space-x-2">
                <input type="radio" id="pickup" name="trip" className="form-radio text-blue-500"/>
                <label className="text-lg font-medium text-black">Pick-Up</label>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex flex-col">
                    <label className="text-sm text-black">Locations</label>
                    <select id="pickup-location" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your city</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-black">Date</label>
                    <select id="pickup-date" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your date</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-black">Time</label>
                    <select id="pickup-time" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your time</option>
                    </select>
                </div>
            </div>
        </div>

        {/* <!-- Swap Button --> */}
        <button className="bg-blue-600 text-white p-3 rounded-md shadow-md">
            <FontAwesomeIcon icon={faSyncAlt} className='w-3'/>
        </button>

        {/* <!-- Drop-Off Section --> */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4 w-full md:w-1/2">
            <div className="flex items-center space-x-2">
                <input type="radio" id="dropoff" name="trip" className="form-radio text-blue-500"/>
                <label className="text-lg font-medium text-black">Drop-Off</label>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex flex-col">
                    <label className="text-sm text-black">Locations</label>
                    <select id="dropoff-location" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your city</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-black">Date</label>
                    <select id="dropoff-date" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your date</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm text-black">Time</label>
                    <select id="dropoff-time" className="mt-1 border rounded-md text-gray-500 text-sm">
                        <option>Select your time</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
        {/* row-1 */}
      <div className="bg-[#F6F7F9] text-gray-900">
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-400">Popular Car
                </h1>
                <a className="text-blue-600" href="/Category">View All
                </a>
            </div>
         

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                        <a href="/Detail"><Image alt="Silver Nissan GT-R car" className="p-3 w-full h-32 scale-x-[-1] object-cover mb-4"  src={image2}  /></a>
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
         {/* <!-- Card 4 --> */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                 Nissan GT - R
                </h2>
            <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
            </div>
            <p className="text-sm text-gray-500 mb-4">
            Sport
            </p>
            <a href="/Detail"><Image alt="Silver Nissan GT-R car" className="p-3 w-full h-32 object-cover scale-x-[-1] mb-4" src={image2}/></a>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center">
            <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
            80L
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faCogs} className="mr-1 w-5" />
                Manual
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon icon={faUserFriends} className="mr-1 w-5" />
            2 People
            </div>
            </div>
            <div className="flex justify-between items-center">
            <div>
            <span className="text-lg font-semibold">
            $80.00
            </span>
            <span className="text-sm text-gray-500 line-through">
                $100.00
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        {/* <!-- Card 4 --> */}
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
     <Image alt="" className="p-3 w-full h-40 scale-x-[-1] mb-4" src={image7}/>
     <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
      <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
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
        </div>
        </div>
        </div>

{/* row 3 */}
<div className="bg-[#F6F7F9] text-gray-900">
       <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* <!-- Card 1 --> */}
                <div className="bg-white shadow-md rounded-lg p-4">
     <div className="flex justify-between items-center mb-2">
       <h2 className="text-lg font-semibold">
      MG ZX Exclusive
       </h2>
       <FontAwesomeIcon icon={faHeart} className="text-red-500 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      Hatchback
     </p>
     <Image alt="" className="p-3 w-full h-48 mb-4" src={image8}/>
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
        $76.00
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
       New MG ZS
      </h2>
      <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      SUV
     </p>
     <Image alt="" className="w-full h-48 scale-x-[-1] object-fill mb-4"  src={image9}  />
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
       MG ZX Excite
      </h2>
      <FontAwesomeIcon icon={faHeart} className="text-red-500 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      Hatchback
     </p>
     <Image alt="" className="p-3 w-full h-48 mb-4" src={image8}  width={220}/>
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
       4 People
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
        {/* <!-- Card 4 --> */}
        <div className="bg-white shadow-md rounded-lg p-4">
     <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">
       New MG ZS
      </h2>
      <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6" />
     </div>
     <p className="text-sm text-gray-500 mb-4">
      SUV
     </p>
     <Image alt="" className="w-full h-48 object-fill scale-x-[-1] mb-4" src={image9} width={220}/>
     <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
      <FontAwesomeIcon icon={faGasPump} className="mr-1 w-4" />
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
        </div>
        </div>
        </div>
        <div className='flex justify-center items-center'> 
            <button className='text-sm bg-blue-600 text-white py-3 px-6 rounded'>Show more car</button>
        </div>

        </div>
    </>
  );
}
export default Home