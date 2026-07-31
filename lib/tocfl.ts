import a1 from "@/data/tocfl/a1.json";
import a2 from "@/data/tocfl/a2.json";
import b1 from "@/data/tocfl/b1.json";
import b2 from "@/data/tocfl/b2.json";
import c1 from "@/data/tocfl/c1.json";
import c2 from "@/data/tocfl/c2.json";


const data:any = {

A1:a1,
A2:a2,
B1:b1,
B2:b2,
C1:c1,
C2:c2

};


export function getTOCFLWords(
level:string
){

return data[level] || [];

}
