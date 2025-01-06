import React from 'react'

function Banner({bannerDescription,className}) {
  return <>
  <div className={`w-full h-96 relative flex items-center  overflow-hidden`}>
    <img src={bannerDescription.image} alt="digital_image" className='absolute w-full h-full object-cover' />

    <div className='relative  left-[15%]'>
      <div className='w-fit flex justify-center flex-col gap-3 bg-white/80 rounded-sm p-5 border-l-8 border-l-cyan-500'>
      <h2 className='text-4xl capitalize font-semibold text-blue-800 font-roboto tracking-widest'>{bannerDescription.title}</h2>
        <p className='w-3/5 text-sm capitalize'>
        {
          bannerDescription.description
        }
        </p>
      </div>
        
        {/* <span className='text-base'>We  specialize in turning ideas into innovative, <br /> high-performing digital solutions</span>
        <button className='w-fit bg-blue-700 px-5 py-2 rounded-md hover:bg-cyan-600 transition-transform duration-200'>Contact us</button> */}
    </div>
  </div>
  </>
}

export default Banner;