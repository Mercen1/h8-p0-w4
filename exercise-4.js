function cariModus(arr) {
    var frequensi = [];
    var sudah = [];
    for (i = 0; i < arr.length; i++) {
        var temp = 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j && sudah[j] !== true) {
                sudah[j] = true
                temp++
            }
        }
        var cek = false;
        for (k = 0; k < frequensi.length; k++) {
            if (arr[i] === frequensi[k][0]) {
                cek = true
                break;
            }
        }
        if (cek === false) {
            frequensi.push([arr[i], temp])
        }
    }
    var hasil = frequensi[0]
    for (i = 1; i < frequensi.length; i++) {
        if (hasil[1] < frequensi[i][1]) {
            hasil = frequensi[i]
        }
    }
    if (hasil[1] === 1 || hasil[1] === arr.length) {
        hasil[0] = -1
    }

    return hasil[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1