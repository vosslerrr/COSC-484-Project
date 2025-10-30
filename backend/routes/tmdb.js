import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/popular", async (req, res) => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
      }
    }
  );

  const data = await response.json();
  res.json(data);
});

router.get("/:movie_id/images", async (req, res) => {
  const { movie_id } = req.params;
  const { language = "en-US" } = req.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/images?language=${language}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
      }
    }
  );

  const data = await response.json();
  res.json(data);
});

export default router;