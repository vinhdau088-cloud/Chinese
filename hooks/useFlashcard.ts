"use client";

import {useState} from "react";


export function useFlashcard(){

const [index,setIndex]=useState(0);

const [remember,setRemember]=useState(false);


function next(){

setIndex(
index+1
);

setRemember(false);

}


return{

index,
remember,
setRemember,
next

}

}
