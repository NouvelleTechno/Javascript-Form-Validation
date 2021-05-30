class Range {
    constructor(min = false, max = false){
        this.min = min;
        this.max = max;
        this.response = {};
    }
    isValid(value) {
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
}