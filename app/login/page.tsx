"use client";


import {useState} from "react";


export default function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



return(

<main className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
">


<div className="
bg-white
p-8
rounded-3xl
shadow
w-full
max-w-md
">


<h1 className="
text-3xl
font-bold
mb-6
">

🔐 Đăng nhập

</h1>


<input

className="border p-3 rounded-xl w-full mb-3"

placeholder="Email"

onChange={
e=>setEmail(e.target.value)
}

/>


<input

className="border p-3 rounded-xl w-full mb-5"

placeholder="Password"

type="password"

onChange={
e=>setPassword(e.target.value)
}

/>


<button

className="
bg-purple-600
text-white
p-3
rounded-xl
w-full
"

>

Login

</button>


</div>


</main>

)

}
