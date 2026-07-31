"use client";


import {useState} from "react";
import {createQuiz} from "@/lib/quiz";


export default function QuizPage(){


const [quiz,setQuiz]=useState(
createQuiz("HSK1")
);


const [score,setScore]=useState(0);


function check(
answer:string
){


if(answer===quiz?.answer){

setScore(score+1);

}


setQuiz(
createQuiz("HSK1")
);


}



return(

<main className="
p-8
min-h-screen
bg-gray-50
">


<h1 className="
text-3xl
font-bold
mb-5
">

📝 HSK Quiz

</h1>


<div className="
bg-white
rounded-3xl
shadow
p-8
max-w-xl
">


<h2 className="
text-6xl
font-bold
text-purple-600
">

{quiz?.question}

</h2>


<p className="mt-3">
{quiz?.pinyin}
</p>


<div className="
grid
gap-3
mt-8
">


{
quiz?.options.map(
(option)=>(
<button

key={option}

onClick={()=>check(option)}

className="
p-3
rounded-xl
bg-purple-100
hover:bg-purple-200
"

>

{option}

</button>

)
)
}


</div>


<p className="mt-6">

Điểm: {score}

</p>


</div>


</main>

)

}
