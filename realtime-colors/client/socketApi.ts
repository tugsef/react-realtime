import io from "socket.io-client";

let socket:any;

export const init = () => {
  console.log("Sunucuya Bağlanılıyor");

  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Bağlantı başarıile gerçekleşti."));
};

export const send = (color:any)=>{
  socket.emit("newColor",color)
}

export const subscribe = (cb:(color:any)=>void)=>{
    socket.on('receive',(color:any)=>{
        console.log(color);
        cb(color)
    })
}