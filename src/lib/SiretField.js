module.exports = class SiretField {
    isValid(siret) {
        siret = siret.replace(/\s/g,"");
        if (siret.length > 13 && SiretField.isValidSiret(siret)) {
            return true;
        }
        return false;
    }
    static isValidSiret(siret) {
        if ((siret.length !== 14) || (isNaN(siret))) {
            return false;
        } else {
            let sum = 0;
            let tmp;
            for (let count = 0; count < siret.length; count++) {
                if ((count % 2) === 0) { 
                    tmp = siret.charAt(count) * 2;
                    if (tmp > 9) {
                        tmp -= 9;
                    }
                } else {
                    tmp = siret.charAt(count);
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