class PasswordField {
    constructor(options = {}){
        this.uppercase = options.hasOwnProperty("uppercase") ? options.uppercase : true;
        this.lowercase = options.hasOwnProperty("lowercase") ? options.lowercase : true;
        this.numeric = options.hasOwnProperty("numeric") ? options.numeric : true;
        this.special = options.hasOwnProperty("special") ? options.special : true;
        this.minLength = options.hasOwnProperty("minLength") ? options.minLength : 12;
        try{
            if(typeof this.uppercase !== "boolean"){
                throw "uppercase option should be boolean";
            }
            if(typeof this.lowercase !== "boolean"){
                throw "lowercase option should be boolean";
            }
            if(typeof this.numeric !== "boolean"){
                throw "numeric option should be boolean";
            }
            if(typeof this.special !== "boolean"){
                throw "special option should be boolean";
            }
            if(typeof this.minLength !== "number"){
                throw "minLength option should be a number";
            }
        }catch(e){
            /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
            console.error(e);
        }
    }
    isValid(password) {
        this.response = {};
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