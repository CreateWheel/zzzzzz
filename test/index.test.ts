import { describe, expect, it } from "vitest";

import { sleep, sleepSync } from "../src";

const offsetHandler = (time: number) => time > 900 && time < 1100;

describe("zzzzzz...", () => {
  it("sleep", async () => {
    const start = Date.now();
    await sleep(1000);
    const time = offsetHandler(Date.now() - start);

    expect(true).toEqual(time);
  });

  it("sleepSync", async () => {
    const start = Date.now();
    sleepSync(1000);
    const time = offsetHandler(Date.now() - start);

    expect(true).toEqual(time);
  });
});
