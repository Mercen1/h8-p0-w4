function angkaPrima(angka) {
    for (i = 2; i < angka; i++) {
        var hasil;

        if (angka % i === 0) {
            hasil = false;
            break
        } else {
            hasil = true;
        }
    }
    return hasil
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false