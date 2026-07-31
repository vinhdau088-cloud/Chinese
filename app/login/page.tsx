"use client";

import { useState } from "react";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


function handleLogin(){

alert(
"Đăng nhập: "+email
);

}


return (

<div className="
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
shadow-xl
w-full
max-w-md
">


<h1 className="
text-3xl
font-bold
text-center
mb-6
">
Đăng nhập 🇨🇳
</h1>


<input
className="
w-full
border
p-3
rounded-xl
mb-4
"
placeholder="Email"
value={email}
onChange={
e=>setEmail(e.target.value)
}
/>


<input
className="
w-full
border
p-3
rounded-xl
mb-4
"
placeholder="Mật khẩu"
type="password"
value={password}
onChange={
e=>setPassword(e.target.value)
}
/>


<button
onClick={handleLogin}
className="
w-full
bg-purple-600
text-white
p-3
rounded-xl
">

Đăng nhập

</button>


</div>


</div>

)

}
