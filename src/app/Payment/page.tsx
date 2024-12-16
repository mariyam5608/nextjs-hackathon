import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import detail1 from "../../../public/detail1.png"
import Paypal from "../../../public/PayPal.png"
import Bitcoin from "../../../public/Bitcoin.png"
import Visa from "../../../public/Visa.png"

const Payment = () => {
  return (
    <div className='flex justify-center gap-10 bg-gray-100'>

       <div className="bg-gray-100 text-gray-800 w-full flex justify-start items-center">
  <div className="w-full ml-6 p-6 bg-white shadow-md rounded-lg mt-10">
   {/* <!-- Billing Info --> */}
   <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
     <h2 className="text-xl font-semibold">
      Billing Info
     </h2>
     <span className="text-gray-400">
      Step 1 of 4
     </span>
    </div>
    <p className="text-gray-400 mb-6">
     Please enter your billing info
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div>
      <label className="block text-black mb-2">
       Name
      </label>
      <input className="w-full p-3 border border-gray-300 text-gray-400 rounded-md" placeholder="Your name" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       Phone Number
      </label>
      <input className="w-full p-3 border border-gray-300 text-gray-400 rounded-md" placeholder="Phone number" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       Address
      </label>
      <input className="w-full p-3 border border-gray-300 text-gray-400 rounded-md" placeholder="Address" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       Town / City
      </label>
      <input className="w-full p-3 border border-gray-300 text-gray-400 rounded-md" placeholder="Town or city" type="text"/>
     </div>
    </div>
   </div>
   {/* <!-- Rental Info --> */}
   <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
     <h2 className="text-xl font-semibold">
      Rental Info
     </h2>
     <span className="text-gray-400">
      Step 2 of 4
     </span>
    </div>
    <p className="text-gray-400 mb-6">
     Please select your rental date
    </p>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-radio text-blue-600" name="rental_type" type="radio"/>
      <span className="ml-2">
       Pick - Up
      </span>
     </label>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
     <div>
      <label className="block text-black mb-2">
       Locations
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your city
       </option>
      </select>
     </div>
     <div>
      <label className="block text-black mb-2">
       Date
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your date
       </option>
      </select>
     </div>
     <div>
      <label className="block text-black mb-2">
       Time
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your time
       </option>
      </select>
     </div>
    </div>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-radio text-blue-600" name="rental_type" type="radio"/>
      <span className="ml-2">
       Drop - Off
      </span>
     </label>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div>
      <label className="block text-black mb-2">
       Locations
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your city
       </option>
      </select>
     </div>
     <div>
      <label className="block text-black mb-2">
       Date
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your date
       </option>
      </select>
     </div>
     <div>
      <label className="block text-black mb-2">
       Time
      </label>
      <select className="w-full p-3 border border-gray-300 text-gray-400 rounded-md">
       <option>
        Select your time
       </option>
      </select>
     </div>
    </div>
   </div>
   {/* <!-- Payment Method --> */}
   <div className="mb-8">
    <div className="flex justify-between items-center mb-4">
     <h2 className="text-xl font-semibold">
      Payment Method
     </h2>
     <span className="text-gray-400">
      Step 3 of 4
     </span>
    </div>
    <p className="text-gray-500 mb-6">
     Please enter your payment method
    </p>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-radio text-blue-600" name="payment_method" type="radio"/>
      <span className="ml-2 text-black">
       Credit Card
      </span>
     </label>
     <div className="flex justify-end">
      <Image alt="Visa and Mastercard logos" className="ml-2" height="40" src={Visa} width="80"/>
     </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
     <div>
      <label className="block text-black mb-2">
       Card Number
      </label>
      <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="Card number" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       Expiration Date
      </label>
      <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="DD / MM / YY" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       Card Holder
      </label>
      <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="Card holder" type="text"/>
     </div>
     <div>
      <label className="block text-black mb-2">
       CVC
      </label>
      <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="CVC" type="text"/>
     </div>
    </div>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-radio text-blue-600" name="payment_method" type="radio"/>
      <span className="ml-2 text-black">
       PayPal
      </span>
     </label>
     <div className="flex justify-end">
      <Image alt="PayPal logo" className="ml-2" height="40" src={Paypal} width="80"/>
     </div>
    </div>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-radio text-blue-600" name="payment_method" type="radio"/>
      <span className="ml-2 text-black">
       Bitcoin
      </span>
     </label>
     <div className="flex justify-end">
      <Image alt="Bitcoin logo" className="ml-2" height="40" src={Bitcoin} width="80"/>
     </div>
    </div>
   </div>
   {/* <!-- Confirmation --> */}
   <div>
    <div className="flex justify-between items-center mb-4">
     <h2 className="text-xl font-semibold">
      Confirmation
     </h2>
     <span className="text-gray-400">
      Step 4 of 4
     </span>
    </div>
    <p className="text-gray-500 mb-6">
     We are getting to the end. Just few clicks and your rental is ready!
    </p>
    <div className="mb-4">
     <label className="inline-flex items-center">
      <input className="form-checkbox text-blue-600" type="checkbox"/>
      <span className="ml-2 text-black">
       I agree with sending an Marketing and newsletter emails. No spam, promissed!
      </span>
     </label>
    </div>
    <div className="mb-6">
     <label className="inline-flex items-center">
      <input className="form-checkbox text-blue-600" type="checkbox"/>
      <span className="ml-2 text-black">
       I agree with our terms and conditions and privacy policy.
      </span>
     </label>
    </div>
    <a href="/Admin">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md">
        Rent Now
        </button>
    </a>
    <div className="flex items-center mt-6">
    <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 w-6" />
     <p className="ml-2 text-black">
      All your data are safe
     </p>
    </div>
    <p className="text-gray-500 mt-2">
     We are using the most advanced security to provide you the best experience ever.
    </p>
   </div>
  </div>
 </div>


 <div className="bg-gray-100 flex items-start justify-center min-h-screen w-3/4">
  <div className="bg-white rounded-lg shadow-lg p-6 w-full mr-6 mt-10">
   <h2 className="text-xl text-black font-bold mb-1">
    Rental Summary
   </h2>
   <p className="text-sm text-gray-500 mb-4">
    Prices may change depending on the length of the rental and the price of your rental car.
   </p>
   <div className="flex items-center mb-8">
    <Image alt="Image of a Nissan GT-R car" className="w-24 h-20 rounded-lg" height="80" src={detail1} width="80"/>
    <div className="ml-4">
     <h3 className="text-3xl text-black font-semibold">
      Nissan GT - R
     </h3>
     <div className="flex items-center">
      <div className= "flex text-yellow-500">
      <FontAwesomeIcon icon={faStar} className='w-4' />
      <FontAwesomeIcon icon={faStar} className='w-4'/>
      <FontAwesomeIcon icon={faStar} className='w-4'/>
      <FontAwesomeIcon icon={faStar} className='w-4'/>                    
      <FontAwesomeIcon icon={faStarHalfAlt} className='w-4'/>
      </div>
      <span className="text-sm text-gray-500 ml-2">
       440+ Reviewer
      </span>
     </div>
    </div>
   </div>
   <div className="border-t border-gray-200 pt-4">
    <div className="flex justify-between mb-4 ">
     <span className="text-gray-500">
      Subtotal
     </span>
     <span className="font-semibold text-black">
      $80.00
     </span>
    </div>
    <div className="flex justify-between mb-8">
     <span className="text-gray-500">
      Tax
     </span>
     <span className="font-semibold text-black">
      $0
     </span>
    </div>
    <div className="flex items-center mb-4">
     <input className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Apply promo code" type="text"/>
     <button className="bg-gray-100 text-black px-4 py-2 rounded-r-lg">
      Apply now
     </button>
    </div>
   </div>
   <div className="border-t border-gray-200 pt-4">
    <div className="flex justify-between items-center">
     <span className="text-black">
      Total Rental Price
     </span>
     <span className="text-3xl font-bold text-black">
      $80.00
     </span>
    </div>
    <p className="text-sm text-gray-500">
     Overall price and includes rental discount
    </p>
   </div>
  </div>
 </div>


    </div>
  )
}

export default Payment
