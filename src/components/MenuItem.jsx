import React from 'react'

export default function MenuItem({item}) {
    const {name,image,recipe,category,price} = item
  return (
    <div className='flex space-x-4'>
        <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
        <div>
            <h3 className='uppercase font-semibold'>{name}----------</h3>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-600'>${price}</p>
    </div>
  )
}
