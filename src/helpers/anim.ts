// import { useAnimate, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

// export const useAnimation=(animated, defaultPos)=>{
//     const [scope, animate] = useAnimate()
//     const motionDiv = useRef(null)
//     const isInView = useInView(motionDiv)
  
  
//     useEffect(()=>{
//       if(isInView){
//         animate("div", defaultPos, { duration:1, ease: "easeInOut" })
//       }else{
//         animate("div", animated, { duration:0 })
//       }
//     },[isInView, animate]);
// }