export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (typeof value === "number") {
    return Number.isNaN(value);
  }

  if (typeof value === "boolean") {
    return value === false;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  if (value instanceof Map) {
    return value.size === 0;
  }

  if (value instanceof Set) {
    return value.size === 0;
  }

  return false;
}

export function isPresent(value: unknown): boolean {
  return !isEmpty(value);
}
