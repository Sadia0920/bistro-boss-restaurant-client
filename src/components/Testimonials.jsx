import React, { useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default function Testimonials() {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <div className='w-10/12 mx-auto mb-20'>
        <SectionTitle
            subHeading="What Our Clients Say"
            heading="Testimonials">
        </SectionTitle>
        <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
        reviews.map(review => <SwiperSlide
        key={review._id}
        >
        <div className='mx-20 my-10'>
        <Rating
        style={{ maxWidth: 180 }}
        value={review.rating}
        className='w-6/12 mx-auto'
        readOnly
        />
        <i class="fa-solid fa-quote-left text-7xl text-center mt-6 w-full mx-auto"></i>
        <p className='text-center my-4'>{review.details}</p>
        <h3 className='text-3xl text-orange-400 text-center'>{review.name}</h3>
        </div>
        </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}
