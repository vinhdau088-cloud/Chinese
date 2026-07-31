"use client";


import {
signIn,
signOut,
useSession
} from "next-auth/react";


export default function LoginButton(){


const {
data:session
}=useSession();



if(session){

return(

<button

onClick={()=>signOut()}

className="
bg-red-500
text-white
px-5
py-3
rounded-xl
"

>

Đăng xuất

</button>

)

}



return(

<button

onClick={()=>signIn("google")}

className="
bg-purple-600
text-white
px-5
py-3
rounded-xl
"

>

Đăng nhập Google

</button>

)

}
