// fallow-ignore-file unused-file -- utility, kept in reserve for future use
// fallow-ignore-file unused-export -- utility, kept in reserve for future use

/**
 * According to the ECMAScript specification, the Number type uses double-precision floating points
 * which have a 64-bit format (binary64) with 53 bits of significand precision (52 stored + 1
 * implicit leading bit). Number.EPSILON (2^-52) is approximately 2.22e-16, meaning the first
 * binary rounding error appears at the 16th decimal place. To safely round without incorporating
 * floating-point  noise into the result, we cap the fractional precision at 15 decimal places.
 */

export const MAX_DECIMALS = 15 as const;

////////////////////////////////////////////////////////////////////////////////////////////////////

export function roundDown(input: number, decimals = 0) {
  const exponent = Math.min(Math.max(decimals, 0), MAX_DECIMALS);
  const factor = 10 ** exponent; // we're treating this as base 10

  // the value of Math.round(x) is the same as the value of Math.floor(x+0.5), except when x is −0
  // or is less than 0 but greater than or equal to -0.5; for these cases Math.round(x) returns −0,
  // but Math.floor(x+0.5) returns +0. so, the last OR zero check looks for -0 and converts it to +0

  // note, using nullish coalescing for this will mess the aforementioned up
  const result = (Math.floor(((input || 0) + Number.EPSILON) * factor) || 0) / factor;

  return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function roundOff(input: number, decimals = 0) {
  const exponent = Math.min(Math.max(decimals, 0), MAX_DECIMALS);
  const factor = 10 ** exponent; // we're treating this as base 10

  // the value of Math.round(x) is the same as the value of Math.floor(x+0.5), except when x is −0
  // or is less than 0 but greater than or equal to -0.5; for these cases Math.round(x) returns −0,
  // but Math.floor(x+0.5) returns +0. so, the last OR zero check looks for -0 and converts it to +0

  // note, using nullish coalescing for this will mess the aforementioned up
  const result = (Math.round(((input || 0) + Number.EPSILON) * factor) || 0) / factor;

  return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export function roundUp(input: number, decimals = 0) {
  const exponent = Math.min(Math.max(decimals, 0), MAX_DECIMALS);
  const factor = 10 ** exponent; // we're treating this as base 10

  // the value of Math.round(x) is the same as the value of Math.floor(x+0.5), except when x is −0
  // or is less than 0 but greater than or equal to -0.5; for these cases Math.round(x) returns −0,
  // but Math.floor(x+0.5) returns +0. so, the last OR zero check looks for -0 and converts it to +0

  // note, using nullish coalescing for this will mess the aforementioned up
  const result = (Math.ceil(((input || 0) + Number.EPSILON) * factor) || 0) / factor;

  return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
