"use client";

import {useState} from "react";


export default function AddVocabulary(){


const [word,setWord]=useState("");

const [meaning,setMeaning]=useState("");



async function save(){


await fetch(
"/api/admin/vocabulary",
{

method:"POST",

body:JSON.stringify({

word,

meaning

})

}

);


alert("Added");

}



return(

<div className="
bg-white
rounded-3xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

➕ Add Word

</h2>



<input

className="
border
p-3
rounded-xl
w-full
mb-3
"

placeholder="漢字"

onChange={
e=>setWord(e.target.value)
}

/>


<input

className="
border
p-3
rounded-xl
w-full
mb-5
"

placeholder="Nghĩa"

onChange={
e=>setMeaning(e.target.value)
}

/>


<button

onClick={save}

className="
bg-purple-600
text-white
px-5
py-3
rounded-xl
"

>

Save

</button>


</div>

)

}
