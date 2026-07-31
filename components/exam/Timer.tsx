"use client";

import {useEffect,useState} from "react";


export default function Timer(){

const [time,setTime]=useState(3600);


useEffect(()=>{

const timer=setInterval(()=>{

setTime(
t=>t>0?t-1:0
);

},1000);


return()=>clearInterval(timer);


},[]);



const minute=Math.floor(
time/60
);

const second=time%60;


return(

<div className="
bg-purple-100
text-purple-700
px-5
py-2
rounded-full
font-bold
">

⏱️ {minute}:{second.toString().padStart(2,"0")}

</div>

)

}
