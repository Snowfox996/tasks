import { testPassValidity } from "./password";

const test_pass = [
    "t@osh0rt",
    "noSpecialCharactersornum",
    "NoNumb&rsbutlongenough",
    "LongEnoughNoNumorSpecCh3r",
    "*CharAtBeginingandlong",
    "This#!sAc0rrectPassword!",
    "Th1s!s@lsoCorr34tYay!!",
    "AndITooAmAv@l!dP4ssw0rd"
];

test("checks if password is valid", () => {
    expect(testPassValidity(test_pass[0])).toBe(false);
    expect(testPassValidity(test_pass[1])).toBe(false);
    expect(testPassValidity(test_pass[2])).toBe(false);
    expect(testPassValidity(test_pass[3])).toBe(false);
    expect(testPassValidity(test_pass[4])).toBe(false);
    expect(testPassValidity(test_pass[5])).toBe(true);
    expect(testPassValidity(test_pass[6])).toBe(true);
    expect(testPassValidity(test_pass[7])).toBe(true);
});
