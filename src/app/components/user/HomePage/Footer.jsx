
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Banner.css";

import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-40'>
      
      <div className="container  py-8">
        <div className="grid gris-cols-1 md:flex justify-around">
          <div className="footer-links">
            <img src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg' />
            {/* <div className='flex items-center mt-5'>
              <InstagramIcon className="pb-118" style={{ fontSize: 40 }} />
              <YouTubeIcon className="ml-5" style={{   fontSize: 40 }} />
              <TwitterIcon className="ml-5" style={{ fontSize: 40 }} />
            </div> */}

            <div className='footer-links px-60'>
                 <div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium pt-2 pr-40 pb-118 pl-0">
                <li class="mb-4">
                    <a href="#" class="hover:underline pt-2 pr-40 pb-118 pl-0">Book a Cab</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Drive with Us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Outstation</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Rental</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Old Money </a>
                </li>
            </ul>
        </div>
             <div>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline pt-2 pr-40 pb-118 pl-0">About Us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Support</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Media Centre</a>
                </li>
            </ul>
        </div>
             <div> 
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">ola s1</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">futureFactory</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">electric</a>
                </li>
            </ul>
        </div>
              {/* <h3 className='text-lg font-semibold'>Explore</h3> */}
              {/* <ul className='mt-4' >
                <li >
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Home
                  </a>
                </li>
                 <li >
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Book a Ride
                  </a>
                </li>
                 <li >
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Home
                  </a>
                </li>
                 <li >
                  <a href='#' className='text-gray-400 hover:text-white'>
                    About Us
                  </a>
                </li>
                 <li >
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Careers
                  </a>
                </li>
              </ul> */}
            </div>
            {/* <div className='footer-links'>
              <h3 className='text-lg font-semibold'>
                Customer Support
              </h3>
              <ul className='mt-4'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    FAQs
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className='footer-links'>
              <h3 className='text-lg font-semibold'></h3>
              <ul className='mt-4'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div> */}
         
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className='container mx-auto'>
          <p className='text-center text-gray-400 text-sm'>
            &copy;{ new Date().getFullYear()} Ola Cabs. All rights reserved.
          </p>
        </div>
      </div>
   </footer>
  )
}

export default Footer