const AB = new Int32Array(new SharedArrayBuffer(4));
export function sleep (t: number) {
  Atomics.wait(AB, 0, 0, Math.max(1, t | 0));
}
