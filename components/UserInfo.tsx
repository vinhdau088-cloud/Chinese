"use client";


import {
useSession
} from "next-auth/react";


export default function UserInfo(){


const {
data:session
}=useSession();



return(

<div>

{

session ?

<div>

<p>
Xin chào {session.user?.name}
</p>

<img

src={
session.user?.image || ""
}

className="
w-12
h-12
rounded-full
"

/>

</div>

:

<p>
Chưa đăng nhập
</p>

}

</div>

)

}
