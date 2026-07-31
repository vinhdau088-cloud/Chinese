import { getHSKWords } from "@/lib/vocabulary";


export default function HSK1Page() {


  const words = getHSKWords("HSK1");


  return (

    <main className="
      p-8
      min-h-screen
      bg-gray-50
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-6
      ">
        HSK 1 Vocabulary
      </h1>



      <div className="
        grid
        md:grid-cols-3
        gap-5
      ">


        {
          words.map((word:any)=>(


            <div

              key={word.id || word.word}

              className="
                bg-white
                rounded-3xl
                shadow
                p-6
              "

            >


              <h2 className="
                text-4xl
                font-bold
                text-purple-600
              ">

                {word.word}

              </h2>



              <p className="
                mt-3
                text-lg
              ">

                {word.pinyin}

              </p>



              <p className="
                text-gray-500
                mt-2
              ">

                {word.zhuyin}

              </p>



              <p className="
                mt-4
              ">

                {word.meaning}

              </p>



            </div>


          ))
        }


      </div>


    </main>

  );

}
