import React from "react";

export default function Card({
children
}:{
children:React.ReactNode;
}){

return(

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>

{children}

</div>

)

}
