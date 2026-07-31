export default function AdminLayout({

children

}:{

children:React.ReactNode

}){


return(

<div className="
min-h-screen
bg-gray-100
">

<header className="
bg-purple-600
text-white
p-5
font-bold
">

👑 Admin Panel

</header>


{children}


</div>

)

}
