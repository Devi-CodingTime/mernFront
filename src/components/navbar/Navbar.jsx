import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' p-4 w-full h-20 flex justify-between bg-blue-700 items-center'>
        <h1 className='text-center font-semibold text-2xl text-white w-[40%]'>Transaction Dashboard</h1>
        <section className='flex gap-7 items-center justify-center w-[60%]'>
          <p className='text-white active:underline font-semibold text-xl cursor-pointer'>
            <Link to={'/'}>Home</Link></p>
          <p className='text-white active:underline font-semibold text-xl cursor-pointer'><Link to={'/statistics'}>Statistics</Link></p>
          <p className='text-white active:underline font-semibold text-xl cursor-pointer'><Link to={'/barchart'}>BarChart</Link></p>

        </section>
      </div>
  )
}

export default Navbar
