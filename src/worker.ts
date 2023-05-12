const AB = new Int32Array(new SharedArrayBuffer(4));
/**
 * Adapted from https://jasonformat.com/javascript-sleep
 *
 * @author Jason Miller
 * @see https://jasonformat.com/javascript-sleep
 */
export function sleep(t: number) {
  Atomics.wait(AB, 0, 0, Math.max(1, t | 0));
}
