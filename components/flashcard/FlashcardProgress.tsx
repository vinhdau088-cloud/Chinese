export default function FlashcardProgress() {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span>Tiến trình</span>
        <span>12%</span>
      </div>

      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-[12%] bg-purple-600 rounded-full"></div>
      </div>
    </div>
  );
}
