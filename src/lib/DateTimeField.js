module.exports = class DateTimeField {
    isValid(value) {
        let d = new Date(value);
        return d instanceof Date && !isNaN(d.getTime());
    }
};