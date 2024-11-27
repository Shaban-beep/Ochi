import React, { useEffect, useState } from "react";

function Eyes() {
    
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX; 
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            // angle = method * conversion to deg factor
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            // Math.atan2()---> static method used to return angle in radian between the positive x-axis and the ray from (0,0) to the point(x, y) for Math.atan2(y,x)
            setRotate(angle-180)
        })
    })
// 1 radian = 57.3 deg
// 180/Math.PI = 57.3
// mtlb--> 1 radian = 180/Math.PI
//    ab Math.attan2 * 180/Math.PI
//     jb pura page khuly to us k liye hota he useEffect he
//     1. pg khuly to mouse ki location
//                   location se map krna he
//     2. clientX, ClientY ki value nikali
//     3. let mouseX = e.clientX
//        let mouseY = e.clientY
//     4. location pata chali center se difference find kr
//     5. angle banana he
//     6. useState mn default value set ki
//     7. setRotate mn straight angle pass kiya
//     8. element mn render kr do
    

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover items-center justify-center bg-no-repeat bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="relative rounded-full w-2/3 h-2/3 bg-zinc-900 items-center justify-center">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="rounded-full w-10 h-10 bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="relative rounded-full w-2/3 h-2/3 bg-zinc-900 items-center justify-center">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="rounded-full w-10 h-10 bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// agr mene nichly dibby k upr aik aur box rkhna he to nichly ki position relative krna aur upr waly ki position absolute rkhna
// translate-x---> ye property left right box ki movement k liye use hoti he
// translate-y---> ye property top se box ko nichy lany k liye use hoti he aur agr box nichy he to us ko top pe le jany k liye is ki positive value use ho gi
// top-1/2---> it moves the element 50% height down from top of container
// left-1/2---> it moves the element 50% width from left to right in the container
// these above four properties used with respect to each other
export default Eyes;
