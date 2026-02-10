"use client";
import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("");
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center">
          ThumbGenAI 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400">
          Generate eye-catching YouTube thumbnails using AI
        </p>

        {/* Input box */}
        <input
        type="text"
        placeholder="Enter your video title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
        />


        {/* Button */}
        <button
         onClick={() => {
         console.log("Video title:", title);
        }}
        className="w-full py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
         Generate Thumbnail
        </button>


      </div>
    </main>
  );
}
