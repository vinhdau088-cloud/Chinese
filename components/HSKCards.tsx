"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const levels=[
{
level:"HSK1",
words:"500 từ",
color:"from-green-400"
},
{
level:"HSK2",
words:"1272 từ",
color:"from-blue-400"
},
{
level:"HSK3",
words:"2245 từ",
color:"from-purple-400"
},
{
level:"HSK4",
words:"3245 từ",
color:"from-orange-400"
},
{
level:"HSK5",
words:"4316 từ",
color:"from-red-400"
},
{
level:"HSK6",
words:"5400+ từ",
color:"from-pink-400"
}
];


export default function HSKCards(){

return (

<div className="
max-w-6xl
mx-auto
px-6
pb-20
">

<h2 className="
text-3xl
font-bold
mb-8
">
Chọn cấp độ HSK
</h2>


<div className="
grid
grid-cols-2
md:grid-cols-3
gap-6
">


{
levels.map((item)=>(
<motion.div
whileHover={{
scale:1.05
}}
key={item.level}
>


<Link
href={`/hsk/${item.level.toLowerCase()}`}
>

<div
className={`
bg-gradient-to-br
${item.color}
to-purple-600
rounded-3xl
p-6
text-white
shadow-xl
`}
>


<h3 className="
text-3xl
font-bold
">
{item.level}
</h3>


<p className="mt-3 opacity-90">
{item.words}
</p>


<button
className="
mt-5
bg-white/20
px-4
py-2
rounded-full
"
>
Học ngay
</button>


</div>

</Link>


</motion.div>
))

}


</div>

</div>

)

}
