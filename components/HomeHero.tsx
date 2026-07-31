"use client";

import { motion } from "framer-motion";

export default function HomeHero(){

return (

<section className="
min-h-[500px]
flex
items-center
justify-center
bg-gradient-to-br
from-purple-50
to-white
rounded-3xl
p-10
">

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-center"
>

<h1 className="
text-5xl
md:text-7xl
font-bold
text-purple-700
">

🇨🇳 ChineseMaster

</h1>


<p className="
mt-5
text-xl
text-gray-600
">

Học tiếng Trung HSK & TOCFL bằng AI

</p>


<button
className="
mt-8
bg-purple-600
text-white
px-8
py-4
rounded-full
text-lg
shadow-lg
hover:scale-105
transition
"
>

Bắt đầu học

</button>


</motion.div>


</section>

);

}
