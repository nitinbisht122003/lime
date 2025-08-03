export const removeSpace = (text: string) => text.replace(/\s/g, "");

export const removeExtraSpace = (text: string) => text.replace(/\s+/g, " ").trim();
