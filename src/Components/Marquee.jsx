import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-14 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl bg-[#004D43]'>
        <div className='text flex border-t-2 border-b-2 border-zinc-400 gap-11 overflow-hidden whitespace-nowrap'>
            <h1 className='text-[23vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-medium uppercase pt-10 -mb-[4vw]'>WE ARE OCHI</h1>
            <h1 className='text-[23vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-medium uppercase pt-10 -mb-[4vw]'>WE ARE OCHI</h1>
        </div>
      
    </div>
  )
}

export default Marquee
