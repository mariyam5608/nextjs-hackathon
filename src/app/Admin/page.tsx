import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faChartBar, faFileInvoiceDollar, faInbox, faCalendarAlt, faCog, faInfoCircle, faBriefcase, faSignOutAlt, faSun, faMoon, faDotCircle, faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import detail1 from "../../../public/detail1.png"
import Maps from "../../../public/Maps.png"
import Chart from "../../../public/Chart.png"
import image2of2 from "../../../public/image2of2.png"
import RR from "../../../public/RR.png"
import ad1 from "../../../public/ad1.png"
import ad2 from "../../../public/ad2.png"

const Admin = () => {
  return (
    <div className='flex justify-between bg-gray-100'>
      <div className="bg-gray-100 my-8">
    <div className="w-64 h-full bg-white shadow-md">
        <div className="px-6 py-4">
            <h2 className="text-gray-400 text-xs font-semibold mb-4">MAIN MENU</h2>
            <ul>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHome} className="mr-3 w-4" />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faCar} className="mr-3 w-4" />
                        <span>Car Rent</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faChartBar} className="mr-3 w-4" />
                        <span>Insight</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-3 w-4" />
                        <span>Reimburse</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faInbox} className="mr-3 w-4" />
                        <span>Inbox</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 w-4" />
                        <span>Calender</span>
                    </a>
                </li>
            </ul>
            <h2 className="text-gray-400 text-xs font-semibold mt-8 mb-4">PREFERENCES</h2>
            <ul>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faCog} className="mr-3 w-4" />
                        <span>Settings</span>
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-3 w-4" />
                        <span>Help & Center</span>
                    </a>
                </li>
                <li className="mb-2 flex items-center justify-between">
                    <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-3 w-4" />
                        <span>Dark Mode</span>
                    </a>
                    <div className="flex items-center">
                    <FontAwesomeIcon icon={faSun} className="text-blue-500 mr-2 w-4" />
                    <FontAwesomeIcon icon={faMoon} className="text-blue-500 w-4" />
                    </div>
                </li>
            </ul>
            <div className="mt-8">
                <a href="#" className="flex items-center p-2 text-gray-400 hover:text-gray-700">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 w-4" />
                    <span>Log Out</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="bg-gray-50 flex w-full items-center m-8 justify-start">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full">
   <h1 className="text-lg text-black font-semibold mb-4">
    Details Rental
   </h1>
   <div className="bg-gray-100 rounded-lg mb-4">
    <Image alt="Map showing the route" className="w-full rounded-lg" height="400" src={Maps} width="600"/>
   </div>
   <div className="flex items-center mb-8">
    <Image alt="Nissan GT-R car image" className="w-20 h-16 rounded-lg mr-4" height="60" src={detail1} width="100"/>
    <div>
     <h2 className="text-xl text-black font-semibold">
      Nissan GT - R
     </h2>
     <p className="text-sm text-gray-500">
      Sport Car
     </p>
    </div>
    <div className="ml-auto text-gray-500">
     #9761
    </div>
   </div>
   <div className="mb-4">
    <div className="flex items-center mb-4">
     <span className="text-blue-500 mr-2">
     <FontAwesomeIcon icon={faDotCircle} className='w-3' />
     </span>
     <span className="font-semibold text-black">
      Pick 
      - Up
     </span>
    </div>
    <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
     <div>
      <label className="block mb-1 text-black">
       Locations
      </label>
      <div className="flex items-center">
       <span>
        Kota Semarang
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
     <div>
      <label className="block mb-1 text-black">
       Date
      </label>
      <div className="flex items-center">
       <span>
        20 July 2022
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
     <div>
      <label className="block mb-1 text-black">
       Time
      </label>
      <div className="flex items-center">
       <span>
        07.00
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
    </div>
   </div>
   <div className="mb-4">
    <div className="flex items-center mb-4">
     <span className="text-blue-500 mr-2">
     <FontAwesomeIcon icon={faDotCircle} className='w-3'/>
     </span>
     <span className="font-semibold text-black">
      Drop - Off
     </span>
    </div>
    <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
     <div>
      <label className="block mb-1 text-black">
       Locations
      </label>
      <div className="flex items-center">
       <span>
        Kota Semarang
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
     <div>
      <label className="block mb-1 text-black">
       Date
      </label>
      <div className="flex items-center">
       <span>
        21 July 2022
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
     <div>
      <label className="block mb-1 text-black">
       Time
      </label>
      <div className="flex items-center">
       <span>
        01.00
       </span>
       <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3" />
      </div>
     </div>
    </div>
   </div>
   <div className="border-t pt-8">
    <div className="flex justify-between items-center">
     <div>
      <p className="text-lg text-black font-semibold">
       Total Rental Price
      </p>
      <p className="text-xs text-gray-400">
       Overall price and includes rental discount
      </p>
     </div>
     <div className="text-2xl font-bold">
      $80.00
     </div>
    </div>
   </div>
  </div>
 </div>

<div className='w-full m-8'>
<div className="flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-black font-semibold">Top 5 Car Rental</h2>
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 w-5" />
        </div>
        <div className="flex items-center">
            <div className="relative w-32 h-32">
                <Image alt="Donut chart" className="absolute inset-0 w-full h-full object-cover rounded-full" height="220" src={Chart} width="220"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-2xl text-black font-semibold">72,030</p>
                        <p className="text-gray-500">Rental Car</p>
                    </div>
                </div>
            </div>
            <div className="ml-6">
                <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-blue-900 rounded-full mr-2"></span>
                    <span className="text-gray-700">Sport Car</span>
                    <span className="text-gray-700 ml-4">17,439</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    <span className="text-gray-700">SUV</span>
                    <span className="text-gray-700 ml-4">9,478</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">Coupe</span>
                    <span className="text-gray-700 ml-4">18,197</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-blue-300 rounded-full mr-2"></span>
                    <span className="text-gray-700">Hatchback</span>
                    <span className="text-gray-700 ml-4">12,510</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-200 rounded-full mr-2"></span>
                    <span className="text-gray-700">MPV</span>
                    <span className="text-gray-700 ml-4">14,406</span>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="bg-white p-6">
  <div className="bg-white rounded-lg">
   <div className="flex justify-between items-center p-4">
    <h2 className="text-xl text-black font-bold">
     Recent Transaction
    </h2>
    <a className="text-blue-500" href="#">
     View All
    </a>
   </div>
   <div className="border-t border-gray-200">
    <div className="flex items-center p-4">
     <Image alt="Silver Nissan GT-R" className="w-28 h-20 object-contain scale-x-[-1]" height="60" src={ad2} width="100"/>
     <div className="ml-4 flex-1">
      <h3 className="text-lg text-black font-semibold">
       Nissan GT - R
      </h3>
      <p className="text-gray-500">
       Sport Car
      </p>
     </div>
     <div className="text-right">
      <p className="text-gray-500">
       20 July
      </p>
      <p className="text-lg text-black font-bold">
       $80.00
      </p>
     </div>
    </div>
    <div className="border-t border-gray-200">
    </div>
    <div className="flex items-center p-4">
     <Image alt="White Koenigsegg" className="w-28 h-20 object-contain" height="60" src={ad1} width="100"/>
     <div className="ml-4 flex-1">
      <h3 className="text-lg text-black font-semibold">
       Koenigsegg
      </h3>
      <p className="text-gray-500">
       Sport Car
      </p>
     </div>
     <div className="text-right">
      <p className="text-gray-500">
       19 July
      </p>
      <p className="text-lg text-black font-bold">
       $99.00
      </p>
     </div>
    </div>
    <div className="border-t border-gray-200">
    </div>
    <div className="flex items-center p-4">
     <Image alt="Blue Rolls-Royce" className="w-28 h-20 object-contain scale-x-[-1]" height="60" src={RR} width="100"/>
     <div className="ml-4 flex-1">
      <h3 className="text-lg text-black font-semibold">
       Rolls - Royce
      </h3>
      <p className="text-gray-500">
       Sport Car
      </p>
     </div>
     <div className="text-right">
      <p className="text-gray-500">
       18 July
      </p>
      <p className="text-lg text-black font-bold">
       $96.00
      </p>
     </div>
    </div>
    <div className="border-t border-gray-200">
    </div>
    <div className="flex items-center p-4">
     <Image alt="Brown CR-V" className="w-28 h-20 object-contain scale-x-[-1]" height="60" src={image2of2} width="100"/>
     <div className="ml-4 flex-1">
      <h3 className="text-lg text-black font-semibold">
       CR - V
      </h3>
      <p className="text-gray-500">
       SUV
      </p>
     </div>
     <div className="text-right">
      <p className="text-gray-500">
       17 July
      </p>
      <p className="text-lg text-black font-bold">
       $80.00
      </p>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>
    </div>
  )
}

export default Admin
