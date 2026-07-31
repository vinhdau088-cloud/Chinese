export default function XPCard({

xp=0,

level="Beginner"

}:{

xp?:number;

level?:string;

}){


return(

<div className="
bg-white
rounded-3xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
">

🏆 Level

</h2>


<p className="
text-purple-600
text-3xl
font-bold
mt-3
">

{level}

</p>


<p className="mt-3">

⭐ XP: {xp}

</p>


</div>

)

}
