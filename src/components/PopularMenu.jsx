import React, { useEffect } from 'react'
import SectionTitle from '../shared/SectionTitle'
import { useState } from 'react'
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

export default function PopularMenu() {
    const [menu,setMenu]=useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    } ,[])
  return (
    <div className='mb-20 w-10/12 mx-auto'>
        <SectionTitle
        subHeading="Popular Items"
        heading="From Our Menu">
        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
            menu.map(item => <MenuItem 
                item={item}
                key={item._id}>
            </MenuItem>)
            }
        </div>
        <Link><p className='flex justify-center w-4/12 md:w-3/12 lg:w-2/12 border-t-0 border-x-0 bg-transparent text-center text-lg border-gray-800 font-semibold mx-auto mt-10 border-b-2 btn'>View Full Menu</p></Link>
    </div>
  )
}
