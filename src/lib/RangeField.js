module.exports = class RangeField {
    constructor(min = 0, max = 0){
        this.min = min;
        this.max = max;
    }
    isValid(value) {
        this.response = {};
        if(isNaN(value)){
            return false;
        }
        if(this.min){
            if(value < this.min){
                this.response.min = false;
            }
        }
        if(this.max){
            if(value > this.max){
                this.response.max = false;
            }
        }
        return (this.response && Object.keys(this.response).length === 0 && this.response.constructor === Object) ? true : this.response;
    }
};