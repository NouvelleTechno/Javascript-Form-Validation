module.exports = class SameField {
    isValid(...values) {
        return values.every((val) => val === values[0]);
    }
};