"use client";

import type { RefObject } from "react";
import { useRef, useState } from "react";

import { Icon } from "@app/ui/components/icon";
import { Video as VideoComponent } from "@app/ui/components/video";
import { Pressable } from "@app/ui/elements/pressable";
import { View } from "@app/ui/elements/view";
import { PlayIcon } from "@app/ui/icons/play-icon";
import { SpeakerIcon } from "@app/ui/icons/speaker-icon";
import { SpeakerMutedIcon } from "@app/ui/icons/speaker-muted-icon";

interface VideoProps {
  src: string;
  poster: string;
}

export const Video = ({ src, poster, ...props }: VideoProps) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (playerRef.current) {
      try {
        if (isPlaying) {
          playerRef.current.pause();
        } else {
          void playerRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error toggling video playback:", error);
      }
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      playerRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <View className="relative w-full">
      <VideoComponent
        playerRef={playerRef as RefObject<HTMLVideoElement>}
        poster={poster}
        src={src}
        controls={false}
        autoPlay={true}
        muted={true}
        loop={true}
        {...props}
      />

      {/* Play/Pause Overlay */}
      <Pressable className="absolute inset-0 flex items-center justify-center" onPress={togglePlay}>
        {!isPlaying && (
          <View className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
            <Icon as={PlayIcon} className="h-6 w-6" />
          </View>
        )}
      </Pressable>

      {/* Mute/Unmute Control */}
      <View className="absolute bottom-16 right-4 flex items-center gap-2">
        <Pressable onPress={toggleMute}>
          <Icon as={isMuted ? SpeakerMutedIcon : SpeakerIcon} className="h-6 w-6" />
        </Pressable>
      </View>
    </View>
  );
};
