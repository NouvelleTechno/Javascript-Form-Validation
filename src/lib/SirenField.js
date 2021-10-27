module.exports = class SirenField {
    isValid(siren) {
        siren = siren.replace(/\s/g,"");
        if (siren.length > 8 && SirenField.isValidSiren(siren)) {
            return true;
        }
        return false;
    }
    static isValidSiren(siren) {
        if ((siren.length !== 9) || (isNaN(siren))) {
            return false;
        } else {
            let sum = 0;
            let tmp;
            for (let count = 0; count < siren.length; count++) {
                if ((count % 2) === 1) { 
                    tmp = siren.charAt(count) * 2;
                    if (tmp > 9) {
                        tmp -= 9;
                    }
                } else {
                    tmp = siren.charAt(count);
                }
                sum += parseInt(tmp, 10);
            }
            if ((sum % 10) !== 0) {
                return false;        
            }
        }
        return true;
    }
};