"use client";

import { useState } from "react";
import { Volume2, Heart, RotateCcw } from "lucide-react";


export default function AdvancedFlashcard(){

const [flip,setFlip] = useState(false);

const [remember,setRemember] = useState(false);


const word = {

hanzi:"学习",

pinyin:"xuéxí",

zhuyin:"ㄒㄩㄝˊ ㄒㄧˊ",

meaning:"Học tập",

example:"我学习中文。",

translate:"Tôi học tiếng Trung."

};


function playAudio(){

const audio = new Audio(
"/audio/hsk1/xuexi.mp3"
);

audio.play();

}



return (

<div className="flex justify-center">


<div
onClick={()=>setFlip(!flip)}
className="
w-96
h-96
cursor-pointer
perspective
">


<div
className={`
relative
w-full
h-full
transition-transform
duration-700
transform-style-preserve-3d
${flip ? "rotate-y-180":""}
`}
>


{/* Mặt trước */}

<div
className="
absolute
w-full
h-full
bg-white
rounded-3xl
shadow-xl
flex
flex-col
items-center
justify-center
backface-hidden
"
>


<h1
className="
text-7xl
font-bold
text-purple-600
"
>
{word.hanzi}
</h1>


<p className="text-xl mt-4">
{word.pinyin}
</p>


<p>
{word.zhuyin}
</p>


<button
onClick={(e)=>{
e.stopPropagation();
playAudio();
}}
className="
mt-5
"
>

<Volume2/>

</button>


</div>



{/* Mặt sau */}

<div
className="
absolute
w-full
h-full
bg-purple-50
rounded-3xl
shadow-xl
rotate-y-180
backface-hidden
p-8
text-center
"
>


<h2 className="
text-3xl
font-bold
">

{word.meaning}

</h2>


<p className="
mt-5
">

{word.example}

</p>


<p className="
text-gray-500
mt-2
">

{word.translate}

</p>


<div
className="
flex
justify-center
gap-5
mt-8
"
>


<button
onClick={(e)=>{
e.stopPropagation();
setRemember(false)
}}
>

<RotateCcw/>

</button>


<button
  onClick={(e)=>{
    e.stopPropagation();
    setRemember(true)
  }}
>

<Heart
  className={remember ? "text-red-500" : ""}
/>

</button>

</div>

</div>

</div>

</div>

</div>

);
}
