"use client";
import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [images, setImages] = useState<string[]>([]);

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

  fetch("http://localhost:5000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
    .then((res) => res.json())
    .then((data) => {
      setImages(data.images);
      setGenerated(true);
    })
    .catch((err) => {
      console.error("Error:", err);
    })
    .finally(() => {
      setLoading(false);
    });
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
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Generated thumbnail ${index + 1}`}
      className="rounded-md"
    />
  ))}
</div>

  </div>
)}



      </div>
    </main>
  );
}
