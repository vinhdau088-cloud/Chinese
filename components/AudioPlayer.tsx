"use client";

import { Volume2 } from "lucide-react";

export default function AudioPlayer({

src

}:{

src:string

}){

function play(){

const audio=new Audio(src);

audio.play();

}

return(

<button

onClick={play}

className="
rounded-full
bg-purple-100
p-3
hover:bg-purple-200
"

>

<Volume2/>

</button>

)

}
