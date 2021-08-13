class UrlField {
    constructor(options = ["https", "http"]){
        console.log(typeof options);
        this.protocols = (typeof options === "object") ? options : ["https", "http"];
    }

    isValid(url) {
        let lien;
        try {
            lien = new URL(url);
        } catch (e) {
            return false;
        }
        return this.protocols.includes(lien.protocol.slice(0,-1));
    }
}