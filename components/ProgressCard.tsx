export default function ProgressCard(){

return (

<section className="
mt-8
bg-white
rounded-3xl
shadow-xl
p-8
">


<h2 className="
text-2xl
font-bold
">

🔥 Tiến trình hôm nay

</h2>


<p className="mt-3">
Đã học 120 / 5000 từ
</p>


<div className="
mt-5
h-4
bg-gray-200
rounded-full
overflow-hidden
">

<div
className="
h-full
bg-purple-600
w-[35%]
"
/>

</div>


<div className="
grid
grid-cols-3
gap-4
mt-6
">


<div>
🔥
<p>7 ngày</p>
</div>


<div>
📚
<p>120 từ</p>
</div>


<div>
⭐
<p>Level HSK1</p>
</div>


</div>


</section>

);

}
