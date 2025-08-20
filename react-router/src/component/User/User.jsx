import React from 'react'
import { useParams } from 'react-router'
export default function User() {
    const {userid}  = useParams()
  return (
    <div className='bg-gray-400 text-center text-5xl'>User :{userid}</div>
  )
}
