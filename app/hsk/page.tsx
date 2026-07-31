import Link from "next/link";


const levels=[

"HSK1",
"HSK2",
"HSK3",
"HSK4",
"HSK5",
"HSK6"

];


export default function HSKPage(){

return(

<main className="
min-h-screen
bg-gray-50
p-8
">


<h1 className="
text-4xl
font-bold
mb-8
">

📚 HSK 中文

</h1>



<div className="
grid
md:grid-cols-3
gap-5
">


{
levels.map(level=>(

<Link
key={level}
href={`/hsk/${level.toLowerCase()}`}
className="
bg-white
rounded-3xl
shadow
p-8
text-center
hover:scale-105
transition
"
>

<h2 className="
text-2xl
font-bold
text-purple-600
">

{level}

</h2>


<p className="mt-2">
Từ vựng + Flashcard + Quiz
</p>


</Link>


))
}


</div>


</main>

)

}
