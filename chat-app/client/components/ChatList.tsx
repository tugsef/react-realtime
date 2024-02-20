import { useChat } from "@/context/ContextProvider";
import React, { useEffect, useRef } from "react";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  console.log("List", messages);

  return (
    <ScrollableFeed
      className="grow w-full flex flex-col gap-6 overflow-y-auto p-4"
      forceScroll={true}
    >
      <ul>
        {messages.map((message, index) => (
          <li
            key={index}
            className={`flex w-full ${
              message.fromMe ? "justify-end" : "" || ""
            }`}
          >
            <span className="bg-red-500 rounded-xl p-2 m-3">
              {message.message}
            </span>{" "}
          </li>
        ))}
      </ul>
    </ScrollableFeed>
  );
}

export default ChatList;
