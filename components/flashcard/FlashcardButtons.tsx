"use client";

import {
Heart,
ArrowRight,
RotateCcw
} from "lucide-react";

export default function FlashcardButtons({
next
}:{
next:()=>void;
}){

return(

<div className="flex justify-center gap-5 mt-8">

<button
className="rounded-full p-4 bg-gray-100 hover:bg-gray-200"
>

<RotateCcw/>

</button>

<button
className="rounded-full p-4 bg-pink-100 hover:bg-pink-200"
>

<Heart/>

</button>

<button
onClick={next}
className="rounded-full p-4 bg-purple-600 text-white hover:bg-purple-700"
>

<ArrowRight/>

</button>

</div>

)

}
