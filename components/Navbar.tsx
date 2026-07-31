"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar(){

return (

<motion.nav
initial={{y:-30,opacity:0}}
animate={{y:0,opacity:1}}
className="
w-full
bg-white
rounded-3xl
shadow-lg
p-5
flex
items-center
justify-between
mb-8
"
>


<h1 className="
text-2xl
font-bold
text-purple-600
">

🇨🇳 ChineseMaster

</h1>


<div className="
hidden
md:flex
gap-6
font-medium
">


<Link href="/">
Trang chủ
</Link>


<Link href="/hsk/hsk1">
HSK
</Link>


<Link href="/tocfl/a1">
TOCFL
</Link>


<Link href="/search">
Tra từ
</Link>


</div>


<button
className="
bg-purple-600
text-white
px-5
py-2
rounded-full
"
>

Đăng nhập

</button>


</motion.nav>

);

}
