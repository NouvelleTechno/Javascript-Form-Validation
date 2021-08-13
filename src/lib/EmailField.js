module.exports = class EmailField {
    isValid(email) {
        let regex = new RegExp("\\S+@\\S+\\.\\S+");
        if (regex.test(email)) {
            return true;
        }
        return false;
    }
};