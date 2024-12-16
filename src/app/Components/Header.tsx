import React from 'react'
import Image from 'next/image'
import image from '../../../public/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSlidersH, faHeart, faBell, faCog } from '@fortawesome/free-solid-svg-icons' 
const Header = () => {
  return (
       <div className='bg-white'>
  <header className="bg-white flex flex-col md:flex-row items-center justify-between py-4 px-12">
   <div className="flex items-center">
    <h1 className="text-blue-600 text-2xl font-bold">
     MORENT
    </h1>
   </div>
   <div className="flex items-center relative lg:w-1/3 sm:w-full ">
    <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400 h-6 w-6"/>
     <input className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search something here" type="text"/>
     <FontAwesomeIcon icon={faSlidersH} className="absolute right-3 text-gray-400 w-6 h-6"/>
   </div>
   <div>
    <ul className="flex items-center space-x-4">
        <li className='relative'><FontAwesomeIcon icon={faHeart} className="text-gray-400 w-6 h-6"/></li>
        <li className='relative'><FontAwesomeIcon icon={faBell} className="text-gray-400 h-6 w-6"/>
        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full">
        </span></li>
        <li><FontAwesomeIcon icon={faCog} className="text-gray-400 h-6 w-6"/></li><Image src={image} alt="User profile picture" className="ml-2 w-10 h-10 rounded-full cursor-pointer"/>
      </ul>
     </div>
   
  </header>
 </div>
  )
}

export default Header
