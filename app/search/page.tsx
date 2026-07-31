"use client";

import { useState } from "react";
import { searchWord } from "@/lib/vocabulary";


export default function SearchPage(){

  const [text,setText] = useState("");

  const result = searchWord(text);


  return (

    <main className="
      p-8
      min-h-screen
      bg-gray-50
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-5
      ">
        🔎 Tra từ Trung
      </h1>



      <input

        className="
          border
          rounded-xl
          p-3
          w-full
          mb-6
        "

        placeholder="Nhập chữ Hán..."

        value={text}

        onChange={(e)=>setText(e.target.value)}

      />



      <div className="
        grid
        gap-4
      ">


        {
          result.map((word:any)=>(


            <div

              key={word.id || word.word || word.hanzi}

              className="
                bg-white
                rounded-2xl
                shadow
                p-5
              "

            >


              <h2 className="
                text-4xl
                font-bold
                text-purple-600
              ">

                {word.word || word.hanzi}

              </h2>



              <p>
                {word.pinyin}
              </p>



              <p>
                {word.meaning}
              </p>


            </div>


          ))
        }


      </div>


    </main>

  );

}
