import { useState, useEffect } from "react";
import systemLogs from "../telemetry/system_logs.json";

export interface SystemEvent {
  tool: string;
  intent: string;
  agent: string;
  outcome: string;
  timestamp: number;
}

export function useSystemFeed() {
  const [events, setEvents] = useState<SystemEvent[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Initial load
    setEvents(systemLogs.slice(0, 3) as SystemEvent[]);
    setIndex(3);

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % systemLogs.length;
        const newEvent = systemLogs[next] as SystemEvent;
        
        setEvents((current) => {
          const updated = [...current, newEvent];
          // Keep only the last 10 events for performance and layout
          return updated.slice(-10);
        });
        
        return next;
      });
    }, 2500); // New real event every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return events;
}