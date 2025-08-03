"use client";

import dynamic from "next/dynamic";

import type { VideoProps } from "./types";
import { Text } from "../../elements/text";

const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
  loading: () => <Text>Loading...</Text>
});

const Video = ({ playerRef, src, poster, ...props }: VideoProps) => {
  return <ReactHlsPlayer playerRef={playerRef} src={src} poster={poster} {...props} />;
};

export { Video };
