import express from "express";
import cors from "cors";
import tmdbRoutes from "./routes/tmdb.js";

const app = express();
app.use(cors());
app.use("/routes/tmdb", tmdbRoutes);

app.listen(process.env.PORT, () =>
  console.log("Backend running on port 5000")
);
