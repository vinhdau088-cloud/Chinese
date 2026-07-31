"use client";


export default function Register(){


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
Tạo tài khoản
</h1>


<input
className="
w-full
border
p-3
rounded-xl
mb-4
"
placeholder="Tên"
/>


<input
className="
w-full
border
p-3
rounded-xl
mb-4
"
placeholder="Email"
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
/>


<button
className="
w-full
bg-purple-600
text-white
p-3
rounded-xl
">

Đăng ký

</button>


</div>


</div>

)

}
