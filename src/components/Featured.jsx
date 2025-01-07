import React from 'react'
import img from '../assets/home/featured.jpg'
import SectionTitle from '../shared/SectionTitle'
import './Featured.css'

export default function Featured() {
  return (
    <div className='mb-20 featured-item bg-fixed pt-8 pb-16 text-white'>
    <div className='w-10/12 mx-auto'>
        <SectionTitle
            subHeading="Check It Out"
            heading="From Our Menu">
        </SectionTitle>
        <div className='md:flex justify-center p-5 bg-slate-400 bg-opacity-50 items-center gap-10'>
            <div className='md:flex-1'>
                <img src={img} className='h-[300px] w-full' alt="" />
            </div>
            <div className='md:flex-1'>
                <h3 className='text-xl font-semibold'>March 20, 2025</h3>
                <h3 className='uppercase text-xl font-semibold'>Where Can I Get Some?</h3>
                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia reiciendis dignissimos eos nobis pariatur, odio neque quibusdam nulla minus. Consequuntur suscipit sunt asperiores nostrum commodi autem voluptatem mollitia magnam quaerat?</p>
                <button className="btn bg-transparent text-white border-b-2 border-white border-0 mt-5">ORDER NOW</button>
            </div>
        </div>
    </div>
    </div>
  )
}
