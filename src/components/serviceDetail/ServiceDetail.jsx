import React from 'react';
import { useNavigate } from 'react-router';

function ServiceDetail({servicesContent}) {
  const navigation = useNavigate();
  return <>
  <section className='w-full flex items-center justify-center my-10'>
    <div className='w-4/5 h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5'>
        <div className='w-full md:w-4/5 lg:w-2/5 h-full rounded-md overflow-hidden'>
            <img src={servicesContent.image} alt="webdevelopment" className='h-full w-full object-cover' />
        </div>
        <div className='w-full lg:w-3/5 xl:w-3/5 h-full flex flex-col gap-7 text-center sm:text-start justify-between items-center sm:items-start '>
            <h3 className="text-xl md:text-2xl lg:text-2xl  capitalize font-semibold relative after:content-[''] after:w-full sm:after:w-2/5 after:h-1 after:bg-cyan-500 after:block after:mt-2">
            {servicesContent.title}
</h3>
            <p className='text-slate-700 text-sm md:text-base'>{servicesContent.description}</p>
            <button className='bg-cyan-500 hover:bg-cyan-400 font-semibold rounded-lg text-white capitalize w-32 py-2 text-sm sm:text-base' onClick={()=> navigation('/contact')}> contact </button>
        </div>

    </div>
  </section>
  </>
}

export default ServiceDetail;