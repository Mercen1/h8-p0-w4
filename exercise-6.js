function digitPerkalianMinimum(angka) {
    var faktor = [];
    var faktorLength = [];
    var hasil;
    for (i = 1; i <= angka; i++) {
        var faktorisi = '';
        if (angka % i === 0) {
            var a = angka / i;
            faktorisi = faktorisi + i + a
            faktor.push(faktorisi)
        }
    }
    for (j = 0; j < faktor.length; j++) {
        faktorLength.push(faktor[j].length)
        if (faktorLength.length === 1) {
            hasil = faktorLength[0];
        }
    }
    if (faktorLength.length > 1) {
        for (k = 0; k < faktorLength.length - 1; k++) {
            if (faktorLength[k] < faktorLength[k + 1]) {
                var tampung = faktorLength[k];
                faktorLength[k] = faktorLength[k + 1];
                faktorLength[k + 1] = tampung;
            }
            hasil = faktorLength[faktorLength.length - 1]
        }
    }

    return hasil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2