import { useChat } from "@/context/ContextProvider";
import { sendMessage } from "@/socketApi";
import React, { useState } from "react";

function ChatForm() {
  const [message, setMesage] = useState("");
  const { setMessages } = useChat();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(message);
    sendMessage(message);

    setMessages((prevState: any) => [
      ...prevState,
      (prevState[prevState.lenght - 1] = { message, fromMe: true }),
    ]);
    setMesage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        value={message}
        onChange={(event: any) => setMesage(event.target.value)}
        className="w-full rounded-2xl p-2"
      />
    </form>
  );
}

export default ChatForm;
