// fallow-ignore-file unused-file -- utility, kept in reserve for future use

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Isomorphic base64 decoder safely supporting Node.js, Browsers, Web Workers, and Edge Runtimes.
 * @param message The base64-encoded text to decode.
 * @returns {Uint8Array | null} The decoded bytes, or `null` if no supported decoding method is
 * available in the current environment.
 * @example
 * // decode to plain text instead of raw bytes:
 * const text = new TextDecoder().decode(fromBase64(str));
 */
export function fromBase64(message: string): Uint8Array | null {
  const base64 = message.trim();

  // attempt server-side first
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(base64, 'base64');
  } else {
    // prefer the modern standard (TC39 proposal) native method if available
    if (typeof Uint8Array.fromBase64 === 'function')
      return Uint8Array.fromBase64(base64);

    // fallback to the legacy method
    else if (typeof globalThis.atob === 'function')
      return Uint8Array.from(globalThis.atob(base64), (char) => char.charCodeAt(0));
  }

  return null;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Isomorphic base64 encoder safely supporting Node.js, Browsers, Web Workers, and Edge Runtimes.
 * @param message The plain text or raw bytes to encode.
 * @returns {string | null} The encoded base64 text, or `null` if no supported encoding method is
 * available in the current environment.
 */
export function toBase64(message: string | Uint8Array): string | null {
  // attempt server-side first
  if (typeof Buffer !== 'undefined') {
    return typeof message === 'string'
      ? Buffer.from(message, 'utf-8').toString('base64')
      : Buffer.from(message.buffer, message.byteOffset, message.byteLength).toString('base64');
  } else {
    // explicit conversion to bytes to avoid unicode issues with btoa
    const bytes = typeof message === 'string' ? new TextEncoder().encode(message) : message;

    // prefer the modern standard (TC39 proposal) native method if available
    if (typeof Uint8Array.prototype.toBase64 === 'function')
      return bytes.toBase64();

    // fallback to the legacy method
    else if (typeof globalThis.btoa === 'function')
      return globalThis.btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(''));
  }

  return null;
};

////////////////////////////////////////////////////////////////////////////////////////////////////
