const AB = new Int32Array(new SharedArrayBuffer(4));
/**
 * Adapted froam https://jasonformat.com/javascript-sleep
 * @see https://jasonformat.com/javascript-sleep
 * @author Jason Miller
 */
export function sleep (t: number) {
  Atomics.wait(AB, 0, 0, Math.max(1, t | 0));
}
