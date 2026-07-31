"use client";

import { useState } from "react";
import { Volume2, Heart } from "lucide-react";


export default function Flashcard(){

const [show,setShow] = useState(false);


return (

<div
onClick={()=>setShow(!show)}
className="
cursor-pointer
max-w-md
bg-white
rounded-3xl
shadow-xl
p-8
text-center
hover:scale-105
transition
">


<h1 className="
text-6xl
font-bold
text-purple-600
">
学习
</h1>


<p className="text-xl mt-3">
xuéxí
</p>


{
show &&

<div className="mt-5">

<p className="text-2xl">
Học tập
</p>

<p className="mt-3 text-gray-500">
我学习中文。
<br/>
Tôi học tiếng Trung.
</p>

</div>

}


<div className="
flex
justify-center
gap-5
mt-6
">

<button>
<Volume2/>
</button>


<button>
<Heart/>
</button>

</div>


</div>

)

}
