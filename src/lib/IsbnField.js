module.exports = class IsbnField {
    isValid(isbn) {
        let result = false;
        if (isbn !== null) {
            isbn = isbn.replace(/-/g, "");
            isbn = isbn.replace(/ /g, "");
            switch (isbn.length) {
                case 10:
                    result = this.isValidISBN10(isbn);
                    break;
                case 13:
                    result = this.isValidISBN13(isbn);
                    break;
            }
        }
        return result;
    }

    isValidISBN10(isbn) {
        let result = false;

        let regex = new RegExp(/^\d{9}(\d|X){1}$/);

        if (regex.test(isbn)) {
            let sum = 0;
            for (let index = 0; index < 9; index++) {

                sum += isbn[index] * (index + 1);
            }
            sum += isbn[9] === "X" ? 10 : isbn[9] * 10;

            result = sum % 11 === 0;
        }

        return result;
    }

    isValidISBN13(isbn) {

        let result = false;

        if (!isNaN(isbn)) {

            let digitindex = 0;
            let sum = 0;

            for (let index = 0; index < isbn.length; index++) {
                sum += isbn[index] * (this.isOddNumber(digitindex++) ? 3 : 1);
            }

            result = sum % 10 === 0;
        }

        return result;
    }

    isOddNumber(value) {
        return value % 2 !== 0;
    }
};