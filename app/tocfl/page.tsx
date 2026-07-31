import Link from "next/link";


const levels=[

"A1",
"A2",
"B1",
"B2",
"C1",
"C2"

];


export default function TOCFLPage(){


return(

<main className="
p-8
bg-gray-50
min-h-screen
">


<h1 className="
text-4xl
font-bold
mb-8
">

🇹🇼 TOCFL 中文

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

href={`/tocfl/${level.toLowerCase()}`}

className="
bg-white
rounded-3xl
shadow
p-8
hover:scale-105
transition
"

>

<h2 className="
text-3xl
font-bold
text-purple-600
">

TOCFL {level}

</h2>


<p>
Phồn thể + 注音 + Nghe nói
</p>


</Link>

))
}


</div>


</main>

)

}
