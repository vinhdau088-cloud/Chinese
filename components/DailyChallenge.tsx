export default function DailyChallenge(){

const tasks=[
"📖 Học 20 từ mới",
"🎧 Nghe 10 phút tiếng Trung",
"🗣️ Luyện nói 5 câu",
"✍️ Ôn lại flashcard"
];


return (

<section className="
mt-10
bg-white
rounded-3xl
shadow-xl
p-8
">


<h2 className="
text-3xl
font-bold
">

🎯 Nhiệm vụ hôm nay

</h2>


<div className="
grid
md:grid-cols-2
gap-4
mt-6
">


{
tasks.map(task=>(

<div
key={task}
className="
p-5
rounded-2xl
bg-purple-50
hover:scale-105
transition
"
>

{task}

</div>

))
}


</div>


</section>

);

}
