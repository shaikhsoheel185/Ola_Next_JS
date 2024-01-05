

"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const Providers = ({Children}) => {
  return (
    <Provider store={store}>{Children}</Provider>
  )
}

export default Providers
