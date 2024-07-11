import React from 'react'
import splashImage from '../../assets/splash.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


export default function SignIn() {
  return (
    <>
      <div className="grid grid-cols-[1fr_max(360px,_25vw)] h-[100vh] w-[100%]">
        {/* <div className='bg-red-200 col-span-3'></div> */}
        <img src={splashImage} className=" h-full object-cover"/>
        <div className='bg-blue-200 flex flex-col p-6'>
            <img src={logo} className='w-[200px] self-center mt-6'/> 
            <p className='mt-12'>Welcome!</p>
            <input type='text' placeholder='Email' className='rounded-md text-sm p-2 mt-4' value={'mary_ang@moe.edu.sg'}/>
            <input type='password' placeholder='Password' className='rounded-md text-sm p-2 mt-4' value={'aVerySecurePassword'}/>
            <a href='/' className='self-end text-purple-600 text-xs mt-1'>Forgot Password?</a>
            <Link to={'/dashboard/groups'} className='bg-[#491DB6] rounded-md text-white p-2 mt-6 text-center'>Log in</Link>
        </div>
      </div>
    </>
  )
}
