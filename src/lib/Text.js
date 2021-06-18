module.exports = class Text {
    constructor(minLength = 0, maxLength = 0){
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.response = {};
    }
    isValid(text) {
        if(this.minLength){
            if(text.length < this.minLength){
                this.response.minLength = false;
            }
        }
        if(this.maxLength){
            if(text.length > this.maxLength){
                this.response.maxLength = false;
            }
        }
        return (this.response && Object.keys(this.response).length === 0 && this.response.constructor === Object) ? true : this.response;
    }
};