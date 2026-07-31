import Link from "next/link";

export default function Sidebar(){

const menu=[

["🏠","Trang chủ","/"],
["📚","HSK","/hsk"],
["🎓","TOCFL","/tocfl"],
["🃏","Flashcard","/flashcard"],
["🎤","Shadowing","/shadowing"],
["📝","Thi thử","/exam"],
["👥","Cộng đồng","/community"]

];


return (

<aside className="
w-64
min-h-screen
bg-white
rounded-3xl
shadow
p-5
">

<h2 className="
font-bold
text-xl
mb-6
">
Menu
</h2>


<div className="space-y-3">

{
menu.map((item)=>(
<Link
key={item[1]}
href={item[2]}
className="
block
p-3
rounded-xl
hover:bg-purple-100
transition
">

{item[0]} {item[1]}

</Link>
))
}


</div>


</aside>

)

}
