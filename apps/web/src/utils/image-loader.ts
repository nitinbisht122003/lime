export default function imageLoader({
  src,
  width,
  quality = 75
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  try {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality));

    return url.toString();
  } catch {
    // console.log(error);
  }

  return "https://img0.junaroad.com/assets/images/image_not_available.jpg";
}
