import { useCallback, useEffect, useRef, useState } from "react";

import type { StoryItemViewModel } from "@app/types/limeroad";

interface TimerProps {
  isOpen: boolean;
  isPaused: boolean;
  story?: StoryItemViewModel;
  onComplete: () => void;
}

const FPS = 30; // 30 frames per second

export function useStoryTimer({ isOpen, isPaused, story, onComplete }: TimerProps) {
  // Ref to store the interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // Ref to store the elapsed value
  const elapsedRef = useRef(0);
  // Ref to store paused state
  const pausedRef = useRef(isPaused);

  const [progress, setProgress] = useState(0);

  const resetProgress = useCallback(() => {
    // Reset the elapsed time and progress
    elapsedRef.current = 0;
    setProgress(0);
  }, []);

  const clearIntervalIfNeeded = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    clearIntervalIfNeeded();
    resetProgress();
  }, [clearIntervalIfNeeded, resetProgress]);

  const startTimer = useCallback(
    (duration: number) => {
      // Reset the timer before starting
      resetTimer();

      // Don't start the timer if not open
      if (!isOpen) {
        return;
      }

      const frameDuration = 1000 / FPS; // Duration of each frame in milliseconds

      intervalRef.current = setInterval(() => {
        if (pausedRef.current) return; // Don't update if paused

        elapsedRef.current += frameDuration; // Increment elapsed time by the frame duration

        // Calculate progress as a percentage
        const newProgress = Math.min((elapsedRef.current / duration) * 100, 100);
        setProgress(newProgress);

        // Check if the story is complete
        if (newProgress >= 100) {
          clearIntervalIfNeeded();
          onComplete();
        }
      }, frameDuration);
    },

    [isOpen, onComplete, resetTimer, clearIntervalIfNeeded]
  );

  // change paused state
  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // reset timer unmounted
  useEffect(() => {
    return () => {
      resetTimer();
    };
  }, [resetTimer]);

  // Reset progress and duration when story changes
  useEffect(() => {
    if (!story) return;

    const isVideo = story.media.type === "video";

    if (isVideo) return;

    const duration = story.media.duration ?? 5000; // Default to 5 seconds if no duration is provided

    startTimer(duration);
  }, [story, startTimer]);

  return {
    progress // Return the progress state directly instead of a getter function
  };
}
