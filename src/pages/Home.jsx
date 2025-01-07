import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import PopularMenu from '../components/PopularMenu'
import Call from '../components/Call'
import ChefRecommends from './../components/ChefRecommends';
import Featured from './../components/Featured';
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}
