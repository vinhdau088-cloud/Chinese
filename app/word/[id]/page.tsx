import {getHSKWords} from "@/lib/vocabulary";


export default function WordPage(){

const word=getHSKWords("HSK1")[0];


return(

<main className="p-8">


<div className="
bg-white
rounded-3xl
shadow
p-10
max-w-xl
">


<h1 className="
text-7xl
font-bold
text-purple-600
">

{word.word}

</h1>


<p className="text-2xl">
{word.pinyin}
</p>


<p className="text-xl mt-5">
{word.meaning}
</p>


<p className="mt-5">
{word.example}
</p>


</div>


</main>

)

}
