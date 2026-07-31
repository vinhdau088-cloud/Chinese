import {getHSKWords} from "@/lib/vocabulary";


export default function HSK1Page(){


const words=getHSKWords("HSK1");


return(

<main className="
p-8
">


<h1 className="
text-3xl
font-bold
mb-6
">

HSK 1 Vocabulary

</h1>



<div className="
grid
md:grid-cols-3
gap-5
">


{
words.map(word=>(


<div
key={word.id}
className="
bg-white
rounded-3xl
shadow
p-6
"
>


<h2 className="
text-4xl
font-bold
text-purple-600
">

{word.word}

</h2>


<p>
{word.pinyin}
</p>


<p>
{word.meaning}
</p>


</div>


))
}



</div>


</main>

)

}
