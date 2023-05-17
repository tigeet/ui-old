// const withClassname = require("./utils").withClassname;
// require("jest");
const { withClassname } = require("./utils");
require("jest");

test("global", () => {
  expect(withClassname("global")()).toBe("global");
});

test("global and local", () => {
  expect(withClassname("global")("local")).toBe("global__local");
});

test("global, local and boolean modifier", () => {
  expect(
    withClassname("global")("local", [{ type: "bool", name: "disabled" }])
  ).toBe("global__local_disabled");
});

test("global, local and kv modifier", () => {
  expect(
    withClassname("global")("local", [
      { type: "kv", name: "shape", value: "rounded" },
    ])
  ).toBe("global__local_shape-rounded");
});

test("global, local and modifiers", () => {
  expect(
    withClassname("global")("local", [
      { type: "bool", name: "disabled" },
      { type: "kv", name: "shape", value: "rounded" },
    ])
  ).toBe("global__local_disabled_shape-rounded");
});

test("global and modifiers", () => {
  expect(
    withClassname("global")([
      { type: "bool", name: "disabled" },
      { type: "kv", name: "shape", value: "rounded" },
    ])
  ).toBe("global_disabled_shape-rounded");
});
