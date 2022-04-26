import { Divider } from '@mui/material'
import React from 'react'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import Header from '../components/header/Header'
// import Headers from '../components/Headers'

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Divider />
    </div>
  )
}

export default index