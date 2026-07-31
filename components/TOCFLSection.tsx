export default function TOCFLSection(){

return (

<section className="
mt-10
bg-gradient-to-r
from-blue-50
to-purple-50
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
">

🎓 TOCFL A1 - C2

</h2>


<p className="
mt-3
text-gray-600
">

Phồn thể + Zhuyin dành cho người học tại Đài Loan

</p>


<div className="
grid
grid-cols-3
md:grid-cols-6
gap-3
mt-6
">


{
["A1","A2","B1","B2","C1","C2"]
.map(level=>(

<div
key={level}
className="
bg-white
rounded-2xl
p-4
text-center
shadow
font-bold
"
>

{level}

</div>

))
}


</div>


</section>

);

}
