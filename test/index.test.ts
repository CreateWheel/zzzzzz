import { describe, expect, it } from "vitest";
import { sleep, sleepSync } from "../src/index";

const offsetHandler = (time: number) => time > 990 && time < 1010;

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
