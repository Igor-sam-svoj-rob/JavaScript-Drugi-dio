'use strict';

/* Idemo opet do Marka i Josipa i njihovog BMI-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite BMI = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina do
Kreiraj calcBMI metodu na svakom objektu koja će izračunati BMI (ista metoda na oba).

Spremi BMI izračun u vrijednost objekta i vrati ga iz metode (return) ime

logiraj u konzolu tko ima viši BMI, skupa sa imenom i BMI vrijednosti

NPR: Josipov BMI (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm
*/

const marko = {
    ime: 'Marko',
    težina: 78,
    visina: 1.69,
    calcBMI : function(){
        this.bmi = this.težina / this.visina ** 2;
        return this.bmi;
    }
}

const josip = {
    ime: 'Josip',
    težina:92,
    visina: 1.95,
    calcBMI : function(){
        this.bmi = this.težina / this.visina ** 2;
        return this.bmi;
    }
}

marko.calcBMI();
josip.calcBMI();
console.log(marko.bmi, josip.bmi);

if(marko.bmi > josip.bmi) {
    console.log(`${marko.ime}-ov BMI od (${marko.bmi}) je viši od ${josip.ime}-ovog BMI od (${josip.bmi})`);
}else{
    console.log((`${josip.ime}-ov BMI od (${josip.bmi}) je viši od ${marko.ime}-ovog BMI od (${marko.bmi})`))
}
//marko.bmi i josip.bmi moraju u zagrade zato što su iskalkulirani član objekta


