import io from "socket.io-client";

let socket: any;


export const init = () => {
  console.log("Sunucuya Bağlanılıyor");

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Bağlantı başarıile gerçekleşti."));
};

export const  sendMessage = (message: any) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb: (message:any) => void) => {
  if (!socket) return;
  socket.on("receive-message", (message: any) => {
    console.log("Yeni nesaj var..", message);
    cb(message)
  });
};

export const subscribeInitialMessage = (cb: (messages:any) => void) => {
  if (!socket) return;
  socket.on("message-list", (messages: any) => {
    console.log("Initial", messages);
    cb(messages)
  });
};
