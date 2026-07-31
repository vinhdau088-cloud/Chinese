import a1 from "@/data/tocfl/a1.json";


const tocfl:any={

A1:a1

};


export function getTOCFLWords(
level:string
){

return tocfl[level] || [];

}
