import { sign } from "crypto";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNumbers: number[] = [];
    if (numbers.length == 0) {
        return numbers;
    } else if (numbers.length == 1) {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[0]);
    } else if (numbers.length > 1) {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[numbers.length - 1]);
    }
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map((digits: number): number => digits * 3);
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringstoInt = numbers.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );
    return stringstoInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSign = amounts.map((dol: string): string =>
        dol[0] == "$" ? dol.slice(1) : dol
    );
    const strToNum = removeSign.map((dollar: string): number =>
        isNaN(parseInt(dollar)) ? 0 : parseInt(dollar)
    );
    return strToNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removestr = messages.filter(
        (question: string): boolean => question[question.length - 1] != "?"
    );
    const raiseCase = removestr.map((upper: string): string =>
        upper[upper.length - 1] == "!" ? upper.toUpperCase() : upper
    );
    return raiseCase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const countWords = words.filter((word: string): boolean => word.length < 4);

    return countWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        const checkList = colors.every(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        );
        return checkList;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
