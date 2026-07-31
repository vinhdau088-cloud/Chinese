import AdvancedFlashcard from "@/components/AdvancedFlashcard";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-4xl font-bold mb-3">
        🇨🇳 ChineseMaster
      </h1>

      <p className="text-gray-600 mb-8">
        Học tiếng Trung HSK - TOCFL bằng AI
      </p>


      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow">
          📚
          <h2 className="text-xl font-bold">
            HSK 1 - 6
          </h2>
          <p>
            5000+ từ vựng
          </p>
        </div>


        <div className="bg-white rounded-2xl p-6 shadow">
          🎓
          <h2 className="text-xl font-bold">
            TOCFL A1 - C2
          </h2>
          <p>
            Phồn thể + Zhuyin
          </p>
        </div>


        <div className="bg-white rounded-2xl p-6 shadow">
          🎤
          <h2 className="text-xl font-bold">
            Shadowing
          </h2>
          <p>
            Luyện nghe nói
          </p>
        </div>

      </div>


      <section className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Flashcard hôm nay
        </h2>

        <Flashcard />

      </section>


    </main>
  );
}
