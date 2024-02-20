"use client";
import ChatInput from "@/components/ChatForm";
import ChatList from "@/components/ChatList";
import Container from "@/components/Container";
import { useChat } from "@/context/ContextProvider";
import { init, subscribeChat, subscribeInitialMessage } from "@/socketApi";
import React, { useEffect } from "react";

function page() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message: any) => {});
    subscribeInitialMessage((messages: any) => {
      setMessages(messages);
    });
  }, []);
  return (
    <Container color="#D7E4C0">
      <div className="flex flex-col h-3/4 w-3/4 rounded-3xl p-4 bg-amber-400">
        <ChatList />
        <ChatInput />
      </div>
    </Container>
  );
}

export default page;
