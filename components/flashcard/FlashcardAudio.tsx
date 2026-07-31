"use client";

import { Volume2 } from "lucide-react";

export default function FlashcardAudio() {
  return (
    <button className="rounded-full bg-purple-100 p-3 hover:bg-purple-200 transition">
      <Volume2 size={24} />
    </button>
  );
}
