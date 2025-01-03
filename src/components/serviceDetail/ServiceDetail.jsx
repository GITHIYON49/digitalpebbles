import React from 'react';
import { useNavigate } from 'react-router';

function ServiceDetail({servicesContent}) {
  const navigation = useNavigate();
  return <>
  <section className='w-full flex items-center justify-center my-10'>
    <div className='w-4/5 h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5'>
        <div className='w-3/5 lg:w-2/5 h-full rounded-md overflow-hidden'>
            <img src={servicesContent.image} alt="webdevelopment" className='h-full w-full object-cover' />
        </div>
        <div className='w-full lg:w-3/5 xl:w-3/5 h-full flex flex-col gap-7 justify-between items-start '>
            <h5></h5>
            <h3 className="text-3xl font-roboto capitalize font-semibold relative after:content-[''] after:w-32 after:h-1 after:bg-cyan-500 after:block after:mt-2">
            {servicesContent.title}
</h3>
            <p className='text-slate-500'>{servicesContent.description}</p>
            <button className='bg-cyan-500 text-white capitalize w-32 py-2 rounded-e-sm' onClick={()=> navigation('/contact')}> contact </button>
        </div>

    </div>
  </section>
  </>
}

export default ServiceDetail;