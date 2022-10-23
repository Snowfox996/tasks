import { testPassValidity } from "./password";

test("checks if pass is long enough", () => {
    expect(testPassValidity("h&*(jj")).toBe(false);
    expect(testPassValidity("u*9klkuj")).toBe(false);
    expect(testPassValidity("h^78jkh)")).toBe(false);
    expect(testPassValidity("Onethejuik*(7fs6H")).toBe(true);
});
test("checks if has atleast one num", () => {
    expect(testPassValidity("h)&jj")).toBe(false);
    expect(testPassValidity("hjhjsdsdfkjf")).toBe(false);
    expect(testPassValidity("Thdklsflsd$kfjlkd&j4j")).toBe(true);
});
test("checks if pass has at least one special char", () => {
    expect(testPassValidity("h234jj")).toBe(false);
});
test("checks if first is not special char", () => {
    expect(testPassValidity("%12*hjj")).toBe(false);
});
test("checks if pass passes the test", () => {
    expect(testPassValidity("Thisisalongpasswotr&$6783^&*ThatPasses")).toBe(
        true
    );
});
