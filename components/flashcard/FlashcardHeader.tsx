export default function FlashcardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold">
          🃏 Flashcard
        </h2>

        <p className="text-gray-500">
          HSK 1 • Bài 1
        </p>
      </div>

      <div className="rounded-full bg-purple-100 px-4 py-2 text-purple-700 font-semibold">
        1 / 150
      </div>
    </div>
  );
}
