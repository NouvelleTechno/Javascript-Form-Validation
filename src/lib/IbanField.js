module.exports = class IbanField {
    isValid(iban) {
        let country = {
            AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
            CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
            FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
            HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
            LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
            MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
            RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
        };
        let cleanIban = String(iban).toUpperCase().replace(/[^A-Z0-9]/g, "");
        let code = cleanIban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
        let account;

        if (!code || cleanIban.length !== country[code[1]]) {
            return false;
        }

        account = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, (letter) => {
            return letter.charCodeAt(0) - 55;
        });

        return IbanField.mod97(account) === 1;
    }
    static mod97(account) {
        let checksum = account.slice(0, 2), piece;
        for (let offset = 2; offset < account.length; offset += 7) {
            piece = String(checksum) + account.substring(offset, offset + 7);
            checksum = parseInt(piece, 10) % 97;
        }
        return checksum;
    }
};