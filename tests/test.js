"use strict";

const config = require("../");
const fs = require("fs");
const stylelint = require("stylelint");

const validCss = fs.readFileSync("./tests/valid.css", "utf-8");
const invalidCss = fs.readFileSync("./tests/invalid.css", "utf-8");

describe("check valid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({ code: validCss, config });
  });

  it("did not error", () => {
    return result.then((data) => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then((data) => expect(data.results[0].warnings).toEqual([]));
  });
});

describe("check invalid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({ code: invalidCss, config });
  });

  it("did not error", () => {
    return result.then((data) => expect(data.errored).toBeTruthy());
  });

  it("flags no warnings", () => {
    return result.then((data) =>
      expect(data.results[0].warnings).toEqual([
        {
          column: 3,
          line: 3,
          rule: "order/properties-order",
          severity: "error",
          text: 'Expected "display" to come before "font-size" (order/properties-order)',
        },
      ])
    );
  });
});
