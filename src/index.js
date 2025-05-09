// data-validation.js

class DataValidation {
    // Validates if the input is a valid email address
    static isEmail(value) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(value);
    }

    // Validates if the input is a valid URL
    static isURL(value) {
        const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return regex.test(value);
    }

    // Validates if the input is a valid phone number
    static isPhoneNumber(value) {
        const regex = /^\+?[1-9]\d{1,14}$/;
        return regex.test(value);
    }

    // Validates if the input is a number and optionally if it is within a specific range
    static isNumber(value, min = -Infinity, max = Infinity) {
        const num = parseFloat(value);
        return !isNaN(num) && num >= min && num <= max;
    }

    // Validates if the string's length is within the specified range
    static isStringLength(value, minLength = 1, maxLength = Infinity) {
        if (typeof value !== 'string') {
            return false;
        }
        const length = value.length;
        return length >= minLength && length <= maxLength;
    }

    // Validates if the input is a boolean
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    // Validates if the value is a valid date (ISO format)
    static isDate(value) {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }

    // Validates if the input is an integer
    static isInteger(value) {
        const num = parseInt(value, 10);
        return !isNaN(num) && num.toString() === value.toString();
    }

    // Checks if a string contains only alphabetic characters
    static isAlphabetic(value) {
        const regex = /^[A-Za-z]+$/;
        return regex.test(value);
    }

    // Validates if a value is an object and contains the specified keys
    static hasKeys(value, keys) {
        if (typeof value !== 'object' || value === null) {
            return false;
        }
        return keys.every(key => value.hasOwnProperty(key));
    }

    // Custom validation with a callback function
    static customValidation(value, callback) {
        if (typeof callback === 'function') {
            return callback(value);
        }
        return false;
    }
}

module.exports = DataValidation;

