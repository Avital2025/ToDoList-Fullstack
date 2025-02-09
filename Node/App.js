// import express from "express";

// const app = express();
// const PORT = process.env.PORT || 3000;

// // API של Render
// const RENDER_API_URL = "https://api.render.com/v1/services";
// const API_KEY = "rnd_mpvENH8hKPEQnYpdS4I4E745z9DO";

// // נקודת קצה שמחזירה את רשימת האפליקציות
// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(RENDER_API_URL, {
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data from Render API:", error);
//     res.status(500).json({ error: "Failed to fetch data from Render API" });
//   }
// });

// // הפעלת השרת
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import express from 'express';
import renderApi from '@api/render-api';

const app = express();
const PORT = process.env.PORT || 3000;

// אימות מול Render API
renderApi.auth('rnd_qJEXf7yqzg68uH3oC4v6nCz1kkjM');

app.get('/', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from Render API');
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});