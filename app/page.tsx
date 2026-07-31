export default function Home(){

  return (
    <main className="
      min-h-screen
      p-10
      bg-gray-50
    ">

      <h1 className="
        text-5xl
        font-bold
        text-purple-600
      ">
        🇨🇳 ChineseMaster
      </h1>

      <p className="mt-4 text-xl">
        Học tiếng Trung HSK - TOCFL bằng AI
      </p>


      <div className="
        mt-10
        grid
        md:grid-cols-3
        gap-6
      ">

        <div className="bg-white p-6 rounded-3xl shadow">
          📚
          <h2 className="text-2xl font-bold">
            HSK 1 - 6
          </h2>
          <p>
            5000+ từ vựng
          </p>
        </div>


        <div className="bg-white p-6 rounded-3xl shadow">
          🎓
          <h2 className="text-2xl font-bold">
            TOCFL A1 - C2
          </h2>
          <p>
            Phồn thể + Zhuyin
          </p>
        </div>


        <div className="bg-white p-6 rounded-3xl shadow">
          🤖
          <h2 className="text-2xl font-bold">
            AI Chinese
          </h2>
          <p>
            Luyện nghe nói
          </p>
        </div>

      </div>

    </main>
  );
}
