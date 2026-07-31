import React from "react";

export default function Button({
children,
onClick,
className=""
}:{
children:React.ReactNode;
onClick?:()=>void;
className?:string;
}){

return (

<button
onClick={onClick}
className={`
px-5
py-3
rounded-xl
bg-purple-600
text-white
font-semibold
hover:bg-purple-700
transition
${className}
`}
>

{children}

</button>

)

}
