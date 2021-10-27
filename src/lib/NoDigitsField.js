module.exports = class NoDigitsField {
    isValid(value) {
        let regexp = new RegExp(/^\D*$/);
        return regexp.test(value);
    }
};