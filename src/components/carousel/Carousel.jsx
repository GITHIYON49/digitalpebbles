import React, { useState } from 'react';
import { CircleChevronRight,CircleChevronLeft } from 'lucide-react';
import { CarouselData } from '../../data/CarouselData';


function Carousel() {
  const [current,setCurrent] = useState(0);

  const handleNextSlide = ()=>{
    
    if (current === CarouselData.length -1){
      setCurrent(0)
      
    }
    else{
      setCurrent(current + 1)
      console.log(current)
    }
  }
  const handlePrevSlide = ()=>{
    if (current === 0){
      setCurrent(CarouselData.length - 1)
    }
    else{
      setCurrent(current - 1)
      console.log(current)
    }
  }


  return <>
  <section className="w-full overflow-hidden">
  <div className="relative w-full h-[400px]">
    <div
      className="flex transition-transform ease-out duration-500"
      style={{
        transform: `translateX(-${current * 100}%)`,
      }}
    >
      {CarouselData.map((slide, i) => (
        <div key={i} className="flex-shrink-0 w-full">
          <img
            src={slide}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    <div className="absolute top-0 inset-0 flex items-center justify-between px-4">
      <button
        className="p-3 bg-black/50 rounded-full text-gray-100 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
        onClick={handlePrevSlide}
      >
        <CircleChevronLeft className="h-8 w-8" />
      </button>
      <button
        className="p-3 bg-black/50 rounded-full text-gray-100 hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
        onClick={handleNextSlide}
      >
        <CircleChevronRight className="h-8 w-8" />
      </button>
    </div>
    <div className='absolute bottom-0 w-full flex items-center justify-center gap-5 py-5'>
      {
        CarouselData.map((slides,i)=>{
          return <div onClick={()=>{setCurrent(i)}} key={i} className={`h-3 w-3 ${ i === current ? "bg-white" : "bg-gray-500"} rounded-full cursor-pointer`}></div>
        })
      }
      
    </div>
  </div>
</section>

  </>
}

export default Carousel;