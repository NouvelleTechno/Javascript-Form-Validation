module.exports = class JwtField {
    isValid(jwt)
    {
        let regex = new RegExp(/^[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+$/);
        return regex.test(jwt);
    }
};