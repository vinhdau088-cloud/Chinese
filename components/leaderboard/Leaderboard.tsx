"use client";

import {useEffect,useState} from "react";


export default function Leaderboard(){


const [users,setUsers]=useState<any[]>([]);



useEffect(()=>{

fetch("/api/leaderboard")

.then(r=>r.json())

.then(setUsers);


},[]);



return(

<div className="
bg-white
rounded-3xl
shadow
p-6
">


<h2 className="
text-3xl
font-bold
mb-5
">

🏆 Leaderboard

</h2>



{
users.map(
(user,index)=>(

<div

key={index}

className="
flex
justify-between
p-3
border-b
"

>

<span>
#{index+1} {user.name}
</span>


<span>
⭐ {user.xp}
</span>


</div>

))
}



</div>

)

}
