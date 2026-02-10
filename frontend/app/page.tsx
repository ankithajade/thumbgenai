"use client";
import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
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
  disabled={!title || loading}
  onClick={() => {
    setLoading(true);

    setTimeout(() => {
      console.log("Video title:", title);
      setGenerated(true);
      setLoading(false);
    }, 1500);
  }}
  className={`w-full py-3 rounded-md font-semibold transition
    ${loading || !title
      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
      : "bg-white text-black hover:bg-gray-200"
    }`}
>
  {loading ? "Generating..." : "Generate Thumbnail"}
</button>
      {/* Results Section  */}
  {generated && (
  <div className="mt-8 space-y-4">
    <h2 className="text-xl font-semibold text-center">
      Generated Thumbnails
    </h2>

    <div className="grid grid-cols-2 gap-4">
      <div className="h-40 bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
        Thumbnail 1
      </div>
      <div className="h-40 bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
        Thumbnail 2
      </div>
    </div>
  </div>
)}



      </div>
    </main>
  );
}
