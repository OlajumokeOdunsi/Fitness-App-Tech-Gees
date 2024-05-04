import React from 'react'
import pix1 from '/public/05.jpg'

const Fitplan = () => {
  return (

    <>
      {/* <div className='h-screen bg-logo-color lg:py-60 p-4' >

        <div className='h-40'>
          <div className='border-2 bg-transparent border-blue-600 shadow-bg-color shadow rounded bg-gradient-to-b from-slate-500  to-logo-color  '>
            <img className='w-full h-full mix-blend-overlay' src={pix1} alt="" />

            <div className='bg-blue-600'>
              <button className='cursor-pointer bg-bg-color p-4 px-6 rounded-xl hover:bg-bg-color hover:text-text-color font-bold'>5 weeks </button> <br />
              <button className='mt-4 cursor-pointer bg-text-color p-4 rounded-xl hover:bg-bg-color hover:text-text-color font-bold'>Your personal plan </button>
            </div>
          </div>
        </div>
      </div> */}





      <div className='main-font h-screen  lg:py-0  px-6 max-sm:pt-10 md:pt-10 flex justify-center items-center'>

        <div className='lg:py-10 h-full text-white'>
          <h5 className='text-[1.2rem] font-bold tracking-[.2rem]'>Select a fitness plan!</h5>
          <h1 className='text-[15px] font-medium mb-8'>All plans are personialized for you.</h1>
          
          <div className='mt-8 h-90 rounded-xl border-4 border-blue-600 bg-gradient-to-b from-transparent to-text-color mix-blend-luminosity '>
            <img src={pix1} alt="" className='mix-blend-overlay' />
            <button className='shadow-xl ml-4 text-white border-2 hover:bg-text-color border-bg-color rounded-2xl py-2 px-4 mb-6'>5 weeks</button> <br />
          <button className='ml-4 -mt-20  bg-lime-300 text-black border-2 hover:text-color border-bg-color rounded-2xl py-2 px-10 mb-6'>Your personal plan</button>
          <h1 className='text-2xl text-bg-color mb-4 ml-4'>Muscle & Strength Starter</h1>
          <div className='flex gap-8 mb-4 ml-2 text-bg-color ml-4'>
          <h1 className='font-bold'><span className='text-lime-400 font-extrabold'>∣</span>∣∣ Cardio</h1>
          <h1 className='font-bold' ><span className='text-lime-400 font-extrabold'>∣∣</span>∣ Strength</h1>
          </div>
          </div>


          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10 mt-20 p-0 max-md:my-4 ">
          <h1 className='text-2xl text-black'>Gain Muscle</h1>
          <p className='text-black text-2xl'>Focus on muscle tone and Strength with plans brcomposed mostly of low repetition strenght training</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Fitplan