class PhoneField {
    isValid(phone) {
        let regex = new RegExp("\\+(?:[0-9] ?){6,14}[0-9]");
        return regex.test(phone);
    }
}