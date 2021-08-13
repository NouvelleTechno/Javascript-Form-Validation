module.exports = class Ean13Field {
    isValid(ean) {
        if (!ean || ean.length !== 13 || isNaN(ean)){
            return false;
        }
        let mainEan = ean.substr(0,12);
        let checkDigit = parseInt(ean.substr(-1), 10);
        const multiply = [1, 3];
        let total = 0;
        mainEan.split("").forEach((letter, index) => {
            total += parseInt(letter, 10) * multiply[index % 2];
        });
        const base10Superior = Math.ceil(total / 10) * 10;
        return base10Superior - total === checkDigit;
    }
};