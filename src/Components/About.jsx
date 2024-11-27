import React from 'react'

function About() {
  return (
    <>
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.7vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo-<br></br>­ple.</h1>
    </div> 
    <div className='flex gap-5 w-full mt-20 border-t-[1px] p-14 border-[#a1b562] bg-[#CDEA68] text-black'>
          <div className="w-1/2">
          <h1 className='text-5xl tracking-tighter'>Our approach:</h1>
          <button className='flex gap-7 mt-5 items-center bg-zinc-900 py-4 px-7 text-white rounded-full uppercase text-sm'>Read More
             <div className='h-3 w-3 rounded-full bg-zinc-100'></div>
          </button>
          </div>
          <div className="w-1/2 h-[73vh]">
          <img className="rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image of couple" /></div>
    </div>
    </>
  )
}

export default About
