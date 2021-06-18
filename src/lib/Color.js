module.exports = class Color {
    isValid(color) {
        let s = new Option().style;
        s.color = color;
        return s.color !== "";
    }
}