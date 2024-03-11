const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

let visitorCount = 0;

app.get("/api/visitor-count", (req, res) => {
  // Increment the visitor count on each request
  visitorCount++;

  res.json({ visitorCount });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
