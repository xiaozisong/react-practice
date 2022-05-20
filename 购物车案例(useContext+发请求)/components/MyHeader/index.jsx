import './index.scss'
import React from 'react'

export default function index({ children }) {
  return (
    <div className='my-header'>
      {children}
    </div>
  )
}
