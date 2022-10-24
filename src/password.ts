export function testPassValidity(password: string): boolean {
    const specialChar = "!@#$%^&*()";
    const num = "1234567890";
    const passArray = password.split("");
    let checkSpecial = passArray.find((val: string): boolean =>
        specialChar.includes(val)
    );
    let checkNum = passArray.find((val: string): boolean => num.includes(val));

    if (checkSpecial == undefined) {
        checkSpecial = "b";
    }
    if (checkNum == undefined) {
        checkNum = "b";
    }
    let isPassing = false;
    let islong = false;
    let hasNum = false;
    let special = true;
    let notFirst = false;

    // Checks if Password is long enough returns true if > 16
    if (password.length > 16) {
        islong = true;
    } else {
        islong = false;
    }

    // Checks if the first character is a special character returns true if not
    if (!specialChar.includes(password[0])) {
        notFirst = true;
    } else {
        notFirst = false;
    }

    // Checks if their is at least one special character returns true if so
    if (specialChar.includes(checkSpecial)) {
        special = true;
    } else {
        special = false;
    }
    // Checks if their is at least one number returns true if so
    if (num.includes(checkNum)) {
        hasNum = true;
    } else hasNum = false;
    if (
        islong == true &&
        special == true &&
        notFirst == true &&
        hasNum == true
    ) {
        // checks if all the above conditions are met
        isPassing = true;
    } else {
        isPassing = false;
    }

    return isPassing;
}
