const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs");
app.get("/home", function (req, res) {
  res.render("home");
});

server.listen(8080, () => {
  console.log(`listening on port http://localhost:8080`);
});

io.on("connection", (socket) => {
  console.log("User connected at :", socket.id);
  socket.on("message", (data) => {
    console.log(data);
  });
});
