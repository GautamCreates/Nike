import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../Constant'
import { footerLinks } from '../Constant'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container flex max-lg:flex-col lg:flex-row'>
      <div className='flex justify-between items-start gap-20 max-lg:flex-col max-lg:w-full'>
        <div className='flex flex-col items-start'>
          <a href="/"><img src={footerLogo} alt="" width={150} height={46} /></a>
          <p className='font-montserrat text-slate-gray leading-7 sm:max-w-sm mt-10'> Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt="" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-row flex-1 justify-between lg:gap-10 gap-20 flex-wrap w-full max-lg:w-full'>
          {footerLinks.map((section)=>(
            <div key={section} className='flex flex-col gap-4'>
              <h4 className='text-white text-2xl '>{section.title}</h4>
              <ul className='flex flex-col gap-2'>
                {section.links.map((link)=>(
                  <li className='font-montserrat text-slate-gray '>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full m-0'/>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>

        </div> */}
      </div>
    </footer>
  )
}

export default Footer
