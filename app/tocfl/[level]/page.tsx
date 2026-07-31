import { getTOCFLWords } from "@/lib/tocfl";


export default async function LevelPage({

  params

}:{

  params: Promise<{
    level:string
  }>

}){


const { level } = await params;

const levelName = level.toUpperCase();


const words = getTOCFLWords(levelName);


return (

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

TOCFL {levelName}

</h1>



<div className="
grid
md:grid-cols-3
gap-5
">


{
words.map(
(word:any)=>(


<div

key={word.id || word.word}

className="
bg-white
rounded-3xl
shadow
p-6
"

>


<h2 className="
text-5xl
font-bold
text-purple-600
">

{word.traditional || word.word}

</h2>


<p>
{word.zhuyin}
</p>


<p>
{word.pinyin}
</p>


<p className="mt-3">
{word.meaning}
</p>


</div>


))

}



</div>


</main>

)

}
