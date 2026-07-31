"use client";

import {useEffect,useState} from "react";


export default function UserTable(){


const [users,setUsers]=useState<any[]>([]);


useEffect(()=>{

fetch("/api/admin/users")

.then(r=>r.json())

.then(setUsers);


},[]);



return(

<div className="
bg-white
rounded-3xl
p-6
shadow
">


<h2 className="
text-2xl
font-bold
">

Users

</h2>


{

users.map(
(user,index)=>(

<div
key={index}
className="
border-b
p-3
"
>

{user.name}

-

{user.role}

</div>

)

)

}


</div>

)

}
