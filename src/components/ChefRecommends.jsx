import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import pic1 from '../assets/home/slide1.jpg';
import pic2 from '../assets/home/slide2.jpg';
import pic3 from '../assets/home/slide3.jpg';

export default function ChefRecommends() {
  return (
    <div className='mb-20 w-10/12 mx-auto'>
        <SectionTitle
            subHeading="Should Try"
            heading="Chef Recommends">
        </SectionTitle>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16'>
            {/* Card 1 */}
            <div className="card rounded-none card-compact bg-slate-100 shadow-xl">
            <figure className='h-[200px]'>
            <img src={pic1} className='w-full h-full' alt="food" />
            </figure>
            <div className="card-body">
            <h2 className="text-center text-xl font-semibold">Caeser Salad</h2>
            <p className='py-2 text-center font-semibold text-gray-600 px-5'>Lettuce, Eggs, Parmesan Chesses, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
            <button className="btn bg-slate-200 text-yellow-600 border-b-2 border-yellow-600 border-t-0 border-x-0">ADD TO CART</button>
            </div>
            </div>
            </div>
            {/* Card 2 */}
            <div className="card rounded-none card-compact bg-slate-100 shadow-xl">
            <figure className='h-[200px]'>
            <img src={pic2} className='w-full h-full' alt="food" />
            </figure>
            <div className="card-body">
            <h2 className="text-center text-xl font-semibold">Italian Pizza</h2>
            <p className='py-2 text-center font-semibold text-gray-600 px-5'>Capsicum, Sausages, Chesses, Chicken Breast Fillets, Special Sos, Tomato.</p>
            <div className="card-actions justify-center">
            <button className="btn bg-slate-200 text-yellow-600 border-b-2 border-yellow-600 border-t-0 border-x-0">ADD TO CART</button>
            </div>
            </div>
            </div>
            {/* Card 3 */}
            <div className="card rounded-none card-compact bg-slate-100 shadow-xl">
            <figure className='h-[200px]'>
            <img src={pic3} className='w-full h-full' alt="food" />
            </figure>
            <div className="card-body">
            <h2 className="text-center text-xl font-semibold">Mushroom Soup</h2>
            <p className='py-2 text-center font-semibold text-gray-600 px-5'>Mushroom, Cream, Chesses, Milk, Garlic, Chicken Cron.</p>
            <div className="card-actions justify-center">
            <button className="btn bg-slate-200 text-yellow-600 border-b-2 border-yellow-600 border-t-0 border-x-0">ADD TO CART</button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
