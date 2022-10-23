export function testPassValidity(password: string): boolean {
    const specialChar = "1234567890!@#$%^&*()";
    let isPassing = true;
    if (password.length < 16) {
        isPassing = false;
    } else if (password[0].match(specialChar)) {
        isPassing = false;
    }
    return isPassing;
}
