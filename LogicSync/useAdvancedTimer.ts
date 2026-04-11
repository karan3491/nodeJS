import { useEffect, useRef, useState } from "react";

export function useAdvancedTimer(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      savedCallback.current?.();
    }, delay);

    setIsRunning(true);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return { start, stop, isRunning };
}