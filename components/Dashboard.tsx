export default function Dashboard(){

const stats = [
  {
    icon:"🔥",
    title:"Streak",
    value:"7 ngày"
  },
  {
    icon:"📚",
    title:"Từ đã học",
    value:"120"
  },
  {
    icon:"⭐",
    title:"Cấp độ",
    value:"HSK 1"
  },
  {
    icon:"⏱️",
    title:"Thời gian",
    value:"12 giờ"
  }
];


return (

<section className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mt-8
">


{
stats.map((item)=>(
  
<div
key={item.title}
className="
bg-white
rounded-3xl
shadow-xl
p-6
hover:-translate-y-2
transition
"
>

<div className="text-4xl">
{item.icon}
</div>


<h3 className="
mt-4
text-gray-500
font-bold
">
{item.title}
</h3>


<p className="
text-2xl
font-bold
mt-2
">
{item.value}
</p>


</div>

))
}


</section>

);

}
