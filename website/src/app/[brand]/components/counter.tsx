"use client";
import { useEffect, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number; // in ms
  suffix?: string;
}

const Counter = ({ to, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * to);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
