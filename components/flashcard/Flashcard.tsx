"use client";

import { useState } from "react";
import FlashcardHeader from "./FlashcardHeader";
import FlashcardProgress from "./FlashcardProgress";
import FlashcardButtons from "./FlashcardButtons";
import FlashcardAudio from "./FlashcardAudio";

type Card = {
  id: number;
  hanzi: string;
  pinyin: string;
  zhuyin: string;
  meaning: string;
  example: string;
  translation: string;
};

const cards: Card[] = [
  {
    id: 1,
    hanzi: "学习",
    pinyin: "xuéxí",
    zhuyin: "ㄒㄩㄝˊ ㄒㄧˊ",
    meaning: "Học tập",
    example: "我学习中文。",
    translation: "Tôi học tiếng Trung."
  }
];

export default function Flashcard() {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const card = cards[index];

  return (
    <div className="max-w-xl mx-auto">

      <FlashcardHeader />

      <FlashcardProgress />

      <div
        onClick={() => setFlip(!flip)}
        className="cursor-pointer bg-white rounded-3xl shadow-xl p-10 min-h-[420px]"
      >
        {!flip ? (
          <>
            <div className="text-7xl font-bold text-center text-purple-600">
              {card.hanzi}
            </div>

            <p className="text-center mt-5 text-2xl">
              {card.pinyin}
            </p>

            <p className="text-center text-gray-500">
              {card.zhuyin}
            </p>

            <div className="flex justify-center mt-8">
              <FlashcardAudio />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center">
              {card.meaning}
            </h2>

            <p className="mt-8 text-center">
              {card.example}
            </p>

            <p className="text-gray-500 mt-2 text-center">
              {card.translation}
            </p>
          </>
        )}
      </div>

      <FlashcardButtons
        next={() => {
          setFlip(false);
          setIndex((index + 1) % cards.length);
        }}
      />

    </div>
  );
}
