"use client";

import Link from "next/link";
import { User, Moon } from "lucide-react";

export default function Navbar(){

return (

<nav className="
w-full
bg-white
shadow-sm
rounded-2xl
p-4
flex
justify-between
items-center
">

<h1 className="
text-2xl
font-bold
text-purple-600
">
🇨🇳 ChineseMaster
</h1>


<div className="
flex
gap-5
items-center
">


<Link href="/profile">
<User/>
</Link>


<button>
<Moon/>
</button>


</div>


</nav>

);

}
