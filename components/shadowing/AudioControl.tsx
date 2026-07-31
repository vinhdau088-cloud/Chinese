"use client";

import {useRef,useState} from "react";
import {
Play,
Pause
} from "lucide-react";


export default function AudioControl({

src

}:{
src:string
}){


const audio=useRef<HTMLAudioElement|null>(null);

const [playing,setPlaying]=useState(false);


function toggle(){


if(!audio.current)
return;


if(playing){

audio.current.pause();

}else{

audio.current.play();

}


setPlaying(!playing);

}



return(

<div>


<audio
ref={audio}
src={src}
/>


<button

onClick={toggle}

className="
p-4
rounded-full
bg-purple-100
"

>

{

playing?

<Pause/>:

<Play/>

}

</button>


</div>

)

}
