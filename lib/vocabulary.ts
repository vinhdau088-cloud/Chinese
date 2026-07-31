import hsk1 from "@/data/hsk/hsk1.json";
import hsk2 from "@/data/hsk/hsk2.json";
import hsk3 from "@/data/hsk/hsk3.json";
import hsk4 from "@/data/hsk/hsk4.json";
import hsk5 from "@/data/hsk/hsk5.json";
import hsk6 from "@/data/hsk/hsk6.json";


const data:any = {

HSK1:hsk1,
HSK2:hsk2,
HSK3:hsk3,
HSK4:hsk4,
HSK5:hsk5,
HSK6:hsk6

};


export function getHSKWords(
level:string
){

return data[level] || [];

}



export function searchWord(
keyword:string
){

const all=[
...hsk1,
...hsk2,
...hsk3,
...hsk4,
...hsk5,
...hsk6
];


return all.filter(
item=>
item.word.includes(keyword)
||
item.pinyin.includes(keyword)
||
item.meaning.includes(keyword)
);

}
