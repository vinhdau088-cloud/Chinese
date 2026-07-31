import hsk1 from "@/data/hsk/hsk1.json";

export function getHSKWords(level:string){

switch(level){

case "HSK1":
return hsk1;

default:
return [];

}

}
