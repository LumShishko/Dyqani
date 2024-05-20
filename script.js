function Produkt(emri, cmimi, sasia) {
    this.emri = emri;
    this.cmimi = cmimi;
    this.sasia = sasia;
}

Produkt.prototype.displayDetails = function(){
    console.log("Emri i produktit:" + " " + this.emri);
    console.log("Cmimi i produktit:" + " " + this.cmimi);
    console.log("Sasia e produktit:" + " " + this.sasia);
};

function Dyqan() {
    this.produktet = []
}

let emriinput = document.getElementById('emriinput').value;
let cmimiinput = document.getElementById('cmimiinput').value;
let sasiainput = document.getElementById('sasiainput').value;

Dyqan.prototype.addProduct = function(produkti) {
    document.getElementById('emriprod').innerText = emriinput;
    document.getElementById('cmimiprod').innerText = cmimiinput;
    document.getElementById('sasiaprod').innerText = sasiainput;
    this.produktet.push(produkti)

}

Dyqan.prototype.displayProduct = function(produkti) {
    console.log("Produktet ne shitje ne dyqanin tone jane: ");
    for(var i = 0;i < this.produktet.length; i++) {
        console.log("Produkti" + (i + 1) + " : ");
        this.produkti[i].displayDetails();
    }
}



