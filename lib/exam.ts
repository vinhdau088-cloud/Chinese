import hsk1 from "@/data/exams/hsk1.json";


export function getExam(
level:string
){

if(level==="HSK1"){

return hsk1;

}

return [];

}
