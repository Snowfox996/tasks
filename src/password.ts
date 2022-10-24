export function testPassValidity(password: string): boolean {
    const specialChar = "1234567890!@#$%^&*()";
    let isPassing: boolean;
    if (password.length < 16) {
        isPassing = false;
    } else if (specialChar.includes(password[0])) {
        isPassing = false;
    } else if (password.includes(specialChar) == false) {
        return false;
    } else {
        isPassing = true;
    }
    return isPassing;
}
