function tukarBesarKecil(kalimat) {
    const adjabKecil = 'abcdefghijklmnopqrstuvwxyz';
    const adjabBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hasil = '';
    var kalimatArr = [];
    for (var i = 0; i < kalimat.length; i++) {
        kalimatArr.push(kalimat[i])
    }
    for (var j = 0; j < kalimatArr.length; j++) {
        for (k = 0; k < adjabKecil.length; k++) {
            if (kalimatArr[j] === adjabKecil[k]) {
                kalimatArr[j] = adjabBesar[k];
            } else if (kalimatArr[j] === adjabBesar[k]) {
                kalimatArr[j]= adjabKecil[k];
            }
        }
    }
    for (var l = 0; l < kalimatArr.length; l++) {
        hasil = hasil+kalimatArr[l];
    }
    
    return hasil;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"