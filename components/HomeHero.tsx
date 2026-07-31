"use client";

import { motion } from "framer-motion";
import { BookOpen, Flame, Trophy, Sparkles } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="text-center"
        >

          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-3xl">
              <Sparkles
                size={40}
                className="text-purple-600"
              />
            </div>
          </div>


          <h1 className="
          text-5xl
          md:text-6xl
          font-bold
          tracking-tight
          text-gray-900
          ">
            Học tiếng Trung
            <br/>
            thông minh hơn
          </h1>


          <p className="
          mt-6
          text-xl
          text-gray-500
          ">
            HSK 1-6 · TOCFL · Flashcard · AI luyện nói
          </p>


          <button
          className="
          mt-8
          bg-purple-600
          text-white
          px-8
          py-4
          rounded-full
          text-lg
          font-semibold
          shadow-lg
          hover:scale-105
          transition
          "
          >
            Bắt đầu học
          </button>

        </motion.div>



        {/* Stats */}

        <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-16
        ">


          <Stat
          icon={<Flame/>}
          title="Chuỗi học"
          value="7 ngày"
          />


          <Stat
          icon={<BookOpen/>}
          title="Từ đã học"
          value="356 từ"
          />


          <Stat
          icon={<Trophy/>}
          title="Cấp độ"
          value="HSK 2"
          />

        </div>


        {/* Progress */}

        <div className="
        mt-12
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        ">

          <div className="flex justify-between mb-3">

            <h2 className="
            font-bold
            text-xl
            ">
              Tiến trình hôm nay
            </h2>

            <span className="text-purple-600">
              65%
            </span>

          </div>


          <div className="
          h-4
          bg-gray-100
          rounded-full
          overflow-hidden
          ">

            <div
            className="
            h-full
            bg-purple-600
            rounded-full
            "
            style={{
              width:"65%"
            }}
            />

          </div>

        </div>


      </div>

    </section>
  );
}



function Stat({
icon,
title,
value
}:{
icon:React.ReactNode;
title:string;
value:string;
}){

return (

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
flex
items-center
gap-5
"
>

<div className="
bg-purple-100
p-3
rounded-2xl
text-purple-600
">

{icon}

</div>


<div>

<p className="text-gray-500">
{title}
</p>

<h3 className="
text-2xl
font-bold
">
{value}
</h3>

</div>


</div>

)

}
