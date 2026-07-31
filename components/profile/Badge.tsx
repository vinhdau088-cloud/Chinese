export default function Badge({

name

}:{

name:string

}){


return(

<div className="
inline-flex
px-4
py-2
rounded-full
bg-yellow-100
text-yellow-700
font-bold
">

🏅 {name}

</div>

)

}
