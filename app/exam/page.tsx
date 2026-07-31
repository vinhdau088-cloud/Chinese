"use client";


import {useState} from "react";
import {getExam} from "@/lib/exam";


export default function ExamPage(){


const questions=getExam("HSK1");


const [index,setIndex]=useState(0);

const [score,setScore]=useState(0);


const q=questions[index];


function answer(
item:string
){

if(item===q.answer){

setScore(score+1);

}


if(index<questions.length-1){

setIndex(index+1);

}

}


return(

<main className="
min-h-screen
bg-gray-50
p-8
">


<h1 className="
text-3xl
font-bold
mb-6
">

📝 HSK 1 Mock Test

</h1>


<div className="
bg-white
rounded-3xl
shadow
p-8
max-w-xl
">


<h2 className="
text-xl
font-bold
">

{q.question}

</h2>


<div className="grid gap-3 mt-6">

{
q.options.map(
(option)=>(

<button

key={option}

onClick={()=>answer(option)}

className="
bg-purple-100
p-3
rounded-xl
"

>

{option}

</button>

))
}

</div>


<p className="mt-5">

Điểm: {score}

</p>


</div>


</main>

)

}
