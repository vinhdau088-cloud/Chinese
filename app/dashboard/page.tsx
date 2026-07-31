import Leaderboard 
from "@/components/leaderboard/Leaderboard";

import XPCard
from "@/components/profile/XPCard";


export default function Dashboard(){


return(

<main className="
p-8
bg-gray-50
min-h-screen
">


<h1 className="
text-4xl
font-bold
mb-8
">

📚 Learning Dashboard

</h1>


<div className="
grid
md:grid-cols-2
gap-6
">


<XPCard

xp={1200}

level="HSK3"

/>


<Leaderboard/>


</div>


</main>

)

}
