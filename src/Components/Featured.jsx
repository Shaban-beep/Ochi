import React from "react";

function Featured() {
  return (
    <div className="Featured w-full max-h-fit py-24">
      <div className="title-box px-10 border-b-2 pb-10 border-zinc-600">
        <h1 className='text-6xl font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className="cards mt-10 w-full max-h-fit">
        <div className="c-container px-14 w-full max-h-screen flex gap-10">
          <div className="card-container w-1/2 h-fit cursor-pointer relative">
            <div className="card-title py-5 flex gap-2 items-center justify-start">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <h3 className="text-sm uppercase leading-none tracking-tight">
                Cardboard Spaceship
              </h3>
            </div>
            <h1 className="absolute text-[#CDEA68] text-8xl left-full z-[9] w-full tracking-tighter -translate-x-1/2 top-1/4 -translate-y-1/4 font-bold whitespace-nowrap">
              Cardboard Spaceship
            </h1>
            <div className="card w-full h-full overflow-hidden">
              <img
                className="rounded-lg"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons flex gap-2 py-3">
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">BRANDED TEMPLATE</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">SALES DECK</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">SOCIAL MEDIA TEMPLATES</button>
              
            </div>
          </div>
          <div className="card-container w-1/2 h-fit cursor-pointer relative">
            <div className="card-title py-5 flex gap-2 items-center justify-start">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <h3 className="text-sm uppercase leading-none tracking-tight">
                AH2 & Matt Horn
              </h3>
            </div>
            <h1 className="absolute text-[#CDEA68] text-8xl right-full z-[9] w-full tracking-tighter translate-x-1/2 top-1/4 translate-y-1/4 font-bold whitespace-nowrap">
              AH2 & Matt Horn
            </h1>
            <div className="card w-full h-full overflow-hidden">
              <img
                className="rounded-lg"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons py-3">
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full">PITCH DECK</button>
            </div>
          </div>
        </div>

        <div className="c-container px-14 w-full max-h-screen flex gap-10 mt-10">
          <div className="card-container w-1/2 h-fit cursor-pointer relative">
            <div className="card-title py-5 flex gap-2 items-center justify-start">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <h3 className="text-sm uppercase leading-none tracking-tight">
                FYDE
              </h3>
            </div>
            <h1 className="absolute text-[#CDEA68] text-8xl left-full z-[9] w-full tracking-tighter -translate-x-1/4 top-2/4 -translate-y-1/2 font-bold whitespace-nowrap">
              FYDE
            </h1>
            <div className="card w-full h-full overflow-hidden">
              <img
                className="rounded-lg"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons flex gap-2 py-3">
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">AUDIT</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">COPY WRITING</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">SALES DECK</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">SLIDES DESIGN</button>
              
            </div>
          </div>
          <div className="card-container w-1/2 h-fit cursor-pointer relative">
            <div className="card-title py-5 flex gap-2 items-center justify-start">
              <div className="bg-zinc-100 rounded-full w-3 h-3"></div>
              <h3 className="text-sm uppercase leading-none tracking-tight">
                VISE
              </h3>
            </div>
            <h1 className="absolute text-[#CDEA68] text-8xl right-full z-[9] w-full tracking-tighter translate-x-3/4 top-1/3 translate-y-1/4 font-bold whitespace-nowrap">
              VISE
            </h1>
            <div className="card w-full h-full overflow-hidden">
              <img
                className="rounded-lg"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="buttons py-3 flex gap-3">
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full">AGENCY</button>
              <button className="px-4 py-2 border-2 border-zinc-400 text-zinc-300 rounded-full text-sm">COMPANY PRESENTATION</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
