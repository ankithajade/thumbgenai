import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { title } = req.body;

  console.log("Received title:", title);

  res.json({
    images: [
      "https://picsum.photos/400/225?random=11",
      "https://picsum.photos/400/225?random=12",
    ],
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
