"use client";

import {useState,useRef} from "react";


export default function Recorder(){


const [recording,setRecording]=useState(false);

const [audioURL,setAudioURL]=useState("");

const media=useRef<MediaRecorder|null>(null);

const chunks=useRef<Blob[]>([]);



async function start(){

const stream =
await navigator.mediaDevices.getUserMedia({
audio:true
});


media.current=
new MediaRecorder(stream);


chunks.current=[];


media.current.ondataavailable=e=>{

chunks.current.push(e.data);

};


media.current.onstop=()=>{

const blob =
new Blob(
chunks.current,
{
type:"audio/webm"
}
);


setAudioURL(
URL.createObjectURL(blob)
);

};


media.current.start();

setRecording(true);

}



function stop(){

media.current?.stop();

setRecording(false);

}



return(

<div className="mt-6">


{
!recording?

<button

onClick={start}

className="
bg-purple-600
text-white
px-5
py-3
rounded-xl
"

>

🎙️ Bắt đầu ghi âm

</button>

:

<button

onClick={stop}

className="
bg-red-500
text-white
px-5
py-3
rounded-xl
"

>

⏹ Dừng

</button>

}



{
audioURL &&

<audio

controls

src={audioURL}

className="mt-5"

/>

}


</div>

)

}
