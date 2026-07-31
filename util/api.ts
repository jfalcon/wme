// fallow-ignore-file unused-file -- utility, kept in reserve for future use

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Convenience wrapper over `fetch` that returns strongly-typed parsed JSON and throws on a
 * non-ok response.
 * @param url The URL to fetch. Can also include a `Request` object.
 * @param init Standard `fetch` options.
 * @returns {Promise<T>} The parsed JSON response, typed as `T`.
 */
export async function fetchJson<T>(url: string | URL | Request, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  // TODO: add zod validation of the response?
  if (!response.ok) {
    throw new Error(`Response was not ok: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Runs a series of tasks sequentially, pausing `delay` between each. Tasks are only invoked as
 * they're consumed, so results stream in as they land and unconsumed tasks never run.
 * @param tasks Callbacks to invoke, one per item to produce.
 * @param delay Milliseconds to wait before each task after the first. Defaults to 100ms.
 * @yields {T} The result of each task, in order.
 * @example
 * const tasks = urls.map((url) => () => fetchJson<Item>(url));
 * for await (const item of throttle(tasks, 500)) {
 *   console.log(item);
 * }
 */
export async function* throttle<T>(
  tasks: Array<() => Promise<T>>,
  delay = 100,
): AsyncGenerator<T, void, void> {
  for (const [index, task] of tasks.entries()) {
    if (index > 0) {
      // eslint-disable-next-line no-await-in-loop -- sequential by design, not parallelizable
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    // eslint-disable-next-line no-await-in-loop -- must run one at a time to honor the delay
    yield await task();
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
