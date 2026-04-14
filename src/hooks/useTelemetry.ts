import { useState, useEffect } from "react";

export const useTelemetry = (initialValue: number) => {
  const [throughput, setThroughput] = useState(initialValue);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput(prev => +(prev + (Math.random() - 0.5) * 2).toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return throughput;
};
