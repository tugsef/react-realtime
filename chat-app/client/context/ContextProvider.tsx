"use client";

import { createContext, useContext, useState } from "react";

type MessageType = {
  messages: any[];
  setMessages?: any;
};

const ChatContext = createContext<MessageType>({
  messages: [],
});

export function useChat() {
  return useContext(ChatContext);
}

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState([]);
  const values = {
    messages,
    setMessages,
  };
  return (
    <>
      <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    </>
  );
};

export default ChatContext;
