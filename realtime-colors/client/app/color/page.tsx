"use client";
import Container from "@/components/Container";
import Pallette from "@/components/Pallette";
import { init, subscribe } from "@/socketApi";
import React, { useEffect, useState } from "react";

function page() {
  const [activeColor, setActiveColor] = useState<any>("#282c34");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    init();
    subscribe((color: any) => {
      setActiveColor(color);
      setLoading(true);
    });
  }, [activeColor]);

  if (!loading) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        loading...
      </div>
    );
  }
  return (
    <Container color={activeColor}>
      <Pallette activeColor={activeColor} />
    </Container>
  );
}

export default page;
