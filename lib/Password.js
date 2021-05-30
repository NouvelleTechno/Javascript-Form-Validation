class Password {
    constructor(uppercase = true, lowercase = true, numeric = true, special = true, minLength = 12){
        this.uppercase = uppercase;
        this.lowercase = lowercase;
        this.numeric = numeric;
        this.special = special;
        this.minLength = minLength;
        this.response = {};
    }
    isValid(password) {
        if(this.uppercase){
            let regex = /^(?=.*[A-Z])/;
            if(!regex.test(password)){
                this.response.uppercase = false;
            }
        }
        if(this.lowercase){
            let regex = /^(?=.*[a-z])/;
            if(!regex.test(password)){
                this.response.lowercase = false;
            }
        }
        if(this.numeric){
            let regex = /^(?=.*[0-9])/;
            if(!regex.test(password)){
                this.response.numeric = false;
            }
        }
        if(this.special){
            let regex = /^(?=.*[!@#\$%\^&\*])/;
            if(!regex.test(password)){
                this.response.special = false;
            }
        }
        if(password.length < this.minLength){
            this.response.minLength = false;
        }
        return (this.response && Object.keys(this.response).length === 0 && this.response.constructor === Object) ? true : this.response;
    }
}