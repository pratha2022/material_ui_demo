import { Divider } from '@mui/material'
import React from 'react'
import Articles from '../components/articles/Articles'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import Compare from '../components/compare/Compare'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Quiz from '../components/quiz/Quiz'
// import Headers from '../components/Headers'

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Divider sx={{ m: { xs: '1rem', md: '3rem' } }} />
      <Quiz />
      <Divider sx={{ m: { xs: '1rem', md: '3rem' } }} />
      <Articles />
      <Compare />
      <Footer />
    </div>
  )
}

export default index