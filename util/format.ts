// fallow-ignore-file unused-file -- utility, kept in reserve for future use

import { MAX_DECIMALS, roundOff } from './numeric';

const UNIT_FACTOR = 1_024 as const; // 2^10
const SIZE_UNITS = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

////////////////////////////////////////////////////////////////////////////////////////////////////

export function byteSize(bytes: number, decimals = 1): string {
  if (bytes <= 0) return '0 Bytes';

  const scale = Math.min(Math.max(decimals, 0), MAX_DECIMALS);

  let index = Math.min(Math.floor(Math.log2(bytes) / 10), SIZE_UNITS.length - 1);
  let value = roundOff(bytes / Math.pow(UNIT_FACTOR, index), scale);

  // if rounding carried the value up to the bucket ceiling (e.g. 1024.0 KB)
  // then just bump the unit to the next bucket
  if (value >= UNIT_FACTOR && index < SIZE_UNITS.length - 1) {
    index++;
    value = roundOff(value / UNIT_FACTOR, scale);
  }

  return `${value.toFixed(scale)} ${SIZE_UNITS[index]}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
