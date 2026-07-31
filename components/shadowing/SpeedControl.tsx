"use client";


export default function SpeedControl({

change

}:{
change:(speed:number)=>void
}){


return(

<div className="
flex
gap-3
mt-4
">


<button
onClick={()=>change(0.5)}
className="
px-4
py-2
bg-gray-100
rounded-xl
"
>

0.5x

</button>


<button
onClick={()=>change(1)}
className="
px-4
py-2
bg-purple-100
rounded-xl
"
>

1x

</button>


</div>

)

}
