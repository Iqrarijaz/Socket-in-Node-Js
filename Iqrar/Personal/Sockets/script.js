const socket = io("http://localhost3000");
socket.on("chat-message", (data) => {
  console.log(data);
});
