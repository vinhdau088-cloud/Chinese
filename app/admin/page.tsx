export default function AdminPage(){

import UserTable 
from "@/components/admin/UserTable";
return(

<main className="
p-8
">


<h1 className="
text-4xl
font-bold
mb-8
">

⚙️ Admin Dashboard

</h1>

<UserTable/>

<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
bg-white
rounded-3xl
shadow
p-6
">

👥

<p>

Users

</p>

</div>



<div className="
bg-white
rounded-3xl
shadow
p-6
">

📚

<p>

Vocabulary

</p>

</div>

<a
href="/admin/vocabulary"
className="
bg-white
rounded-3xl
shadow
p-6
block
"
>

📚 Manage Vocabulary

</a>

<div className="
bg-white
rounded-3xl
shadow
p-6
">

🎧

<p>

Audio

</p>

</div>



</div>


</main>

)

}
