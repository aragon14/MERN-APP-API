const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
server.listen(3000, () =>
  console.log("🚀 API running on http://localhost:3000")
);
