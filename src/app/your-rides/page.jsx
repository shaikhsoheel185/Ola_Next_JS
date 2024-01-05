"use client"
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Rides from './Rides'

const page = () => {
    return (
      
        <Layout Children={<Rides/>} />
  )
}

export default page