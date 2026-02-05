const express = require ("express");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  res.send("Hello Backend");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});