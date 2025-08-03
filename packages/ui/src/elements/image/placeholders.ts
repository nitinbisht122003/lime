export const placeholderColorPalette = {
  green: "#E8F5E9",
  teal: "#E0F2F1",
  cyan: "#E0F7FA",
  lightBlue: "#E1F5FE",
  lime: "#F9FBE9",
  blue: "#E3F2FD",
  indigo: "#E8EAF6",
  purple: "#F3E5F5",
  pink: "#FCE4EC"
} as const;

type PlaceholderColor = keyof typeof placeholderColorPalette;

const placeholderColors = Object.keys(placeholderColorPalette) as PlaceholderColor[];

const getPlaceholderColor = (src: string, color?: PlaceholderColor) => {
  let placeholderColor = color;

  if (!placeholderColor) {
    // Generate a hash from the src string
    const hash = Array.from(src).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // Use the hash to get an index for the placeholder color palette
    const index = Math.abs(hash) % placeholderColors.length;
    // Get the color from the palette
    placeholderColor = placeholderColors[index] ?? "lime";
  }

  return placeholderColorPalette[placeholderColor];
};

const placeholderSvg = (src: string, w: number, h: number, color?: PlaceholderColor) => {
  // Get the color from the palette
  const colorValue = getPlaceholderColor(src, color);

  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="${w}" height="${h}" fill="${colorValue}" />
    </svg>`;
};

const toBase64 = (str: string) => {
  return typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
};

export const getPlaceholderDataURL = (
  src: string,
  w: number,
  h: number,
  color?: PlaceholderColor
): `data:image/svg+xml;base64,${string}` => {
  // Use the shimmer function to create a base64 encoded SVG
  return `data:image/svg+xml;base64,${toBase64(placeholderSvg(src, w, h, color))}`;
};
