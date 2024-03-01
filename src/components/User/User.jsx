import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()

  return (
    <div className='text-center font-bold text-2xl bg-slate-500 text-white'>User : {id}</div>
  )
}

export default User