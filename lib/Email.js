class Email {
    constructor(email){
        this.email = email;
    }
    isValid() {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
            return true;
        }
        return false;
    }
}