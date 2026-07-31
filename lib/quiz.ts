import { getHSKWords } from "./vocabulary";


export function createQuiz(
level:string
){

const words = getHSKWords(level);


if(words.length===0)
return null;


const question =
words[
Math.floor(
Math.random()*words.length
)
];


const options=[

question.meaning,

...words
.filter(
(w:any)=>w.id!==question.id
)
.slice(0,3)
.map(
(w:any)=>w.meaning
)

];


return {

question: question.word,

pinyin: question.pinyin,

answer: question.meaning,

options: options.sort(
()=>Math.random()-0.5
)

};


}
