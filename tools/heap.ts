/**
 * The tools folder is is the place to ancillary routines that will *never* be built out as part
 * of the project and it will never be included in the actual build output. However, the files
 * in the tools folder can be useful to serve as task runners for build commands, test live or
 * network logic that doesn't belong in a unit test, etc.
 *
 * @file This file can be used to determine how much memory can be allocated in a target
 * environment since what's reported by system specs is not always accurate given the software
 * installed and so on. It will give you a ballpark limit to avoid when profiling your
 * application's memory consumption.
 *
 * @example
 * // run from the command line to perform heap analysis:
 * node tools/heap.ts
 *
 * // expected output:
 * // Heap allocated 0.02 GB of 0.02 GB.
 * // Heap allocated 0.03 GB of 0.03 GB.
 * // ...
 */

const ALLOCATION_STEP = 10_485_760; // 10,485,760 bytes in 10 megabytes
const GIGABYTE = 1_073_741_824; // 1,073,741,824 bytes in a gigabyte
const TIME_INTERVAL = 40; // in milliseconds, to allow time for the GC to kick in

////////////////////////////////////////////////////////////////////////////////////////////////////

const allocateMemory = (size: number): number[] => {
  // simulate allocation of bytes
  const numbers = size / 8;
  const result = [];
  result.length = numbers;

  for (let i = 0; i < numbers; i++) {
    result[i] = i;
  }

  return result;
};

////////////////////////////////////////////////////////////////////////////////////////////////////

// note, use node tools/heap.ts --max-old-space-size=8000 to expend heap size by node/v8
// note, by default on node 26, 64-bit this script errors out at 4GB
const memoryLeakAllocations = [];

setInterval(() => {
  const allocation = allocateMemory(ALLOCATION_STEP);

  memoryLeakAllocations.push(allocation);
  const usage = process.memoryUsage();

  const used = Math.round((usage.heapUsed / GIGABYTE) * 100) / 100;
  const total = Math.round((usage.heapTotal / GIGABYTE) * 100) / 100;

  // eslint-disable-next-line no-console
  console.info(`Heap allocated ${used} GB of ${total} GB.`);
}, TIME_INTERVAL);

////////////////////////////////////////////////////////////////////////////////////////////////////
