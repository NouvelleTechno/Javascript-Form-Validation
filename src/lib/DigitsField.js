module.exports = class DigitsField {
    isValid(value) {
        let regexp = new RegExp(/^\d*$/);
        return regexp.test(value);
    }
};