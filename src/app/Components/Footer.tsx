import React from 'react'
const Footer = () => {
  return (
    <div className="bg-white text-gray-800 ">
    <footer className="py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
                    <p className="mt-2 text-gray-500">Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="flex flex-col px-12 md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                    <div>
                        <h3 className="font-medium text-xl text-black">About</h3>
                        <ul className="mt-2 space-y-2 text-gray-500">
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Business Relation</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-xl text-black">Community</h3>
                        <ul className="mt-2 space-y-2 text-gray-500">
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-xl text-black">Socials</h3>
                        <ul className="mt-2 space-y-2 text-gray-500">
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-200 text-black pt-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-base font-medium">&copy;2022 MORENT. All rights reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0 text-base font-medium">
                    <a href="#" >Privacy & Policy</a>
                    <a href="#" >Terms & Condition</a>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer
