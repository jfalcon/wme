// fallow-ignore-file unused-file -- utility, kept in reserve for future use

////////////////////////////////////////////////////////////////////////////////////////////////////

/** Safely trims all string values in an object, leaving other value types untouched. */
export function trimObject<T>(obj: T): T {
  const trimmed = { ...obj } as T;
  const keys = Object.keys(trimmed as Record<string, unknown>) as Array<keyof T>;

  for (const key of keys) {
    const value = trimmed[key];

    if (typeof value === 'string') {
      (trimmed as Record<string, unknown>)[key as string] = value.trim();
    }
  }

  return trimmed;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
