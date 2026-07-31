const steps=[
{
level:"HSK 1",
title:"基础中文",
done:true
},
{
level:"HSK 2",
title:"日常交流",
done:true
},
{
level:"HSK 3",
title:"生活中文",
done:false
},
{
level:"HSK 4",
title:"中级中文",
done:false
}
];


export default function LearningPath(){

return (

<section className="
mt-10
">


<h2 className="
text-3xl
font-bold
mb-6
">

🛤️ Lộ trình học

</h2>


<div className="
space-y-4
">


{
steps.map(step=>(

<div
key={step.level}
className="
bg-white
rounded-3xl
shadow
p-6
flex
items-center
justify-between
"
>


<div>

<h3 className="
text-xl
font-bold
">

{step.level}

</h3>


<p className="
text-gray-500
">

{step.title}

</p>


</div>


<div className="
text-3xl
">

{
step.done
?
"✅"
:
"🔒"
}

</div>


</div>

))
}


</div>


</section>

);

}
