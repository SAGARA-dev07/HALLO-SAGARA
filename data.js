const namaSaya = "sagara";
let usia = 30;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

   if (usia > 15 && usia < 17) {
    generasi = "generasi remaja";
   } 
   else if (usia > 18 && < 30) {
    generasi = "generasi dewasa";
   } 
   else if (usia >= 30) {
    generasi = "generasi tua";
   }
   else if (usia > 2 && usia < 10) {
    generasi = "generasi anak anak";
   }
   else {
    generasi = "generasi balita";
   }

   return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();