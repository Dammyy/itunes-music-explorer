const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.send("Welcome");
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
