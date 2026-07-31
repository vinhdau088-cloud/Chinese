"use client";

import AudioControl from "./AudioControl";
import SpeedControl from "./SpeedControl";
import Recorder from "./Recorder";

export default function ShadowingCard(){


function speed(value:number){

console.log(
"Speed:",
value
);

}



return(

<div className="
bg-white
rounded-3xl
shadow
p-8
max-w-xl
">


<h1 className="
text-5xl
font-bold
text-purple-600
">

你好

</h1>


<p className="mt-3">
nǐ hǎo
</p>


<p>
ㄋㄧˇ ㄏㄠˇ
</p>


<p className="
mt-5
">

Xin chào

</p>


<AudioControl

src="/audio/hsk/hsk1/nihao.mp3"

/>


<SpeedControl

change={speed}

/>

  <SpeedControl
change={speed}
/>

</div>

)

}
