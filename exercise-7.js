function urutkanAbjad(str) {
    var strNew = [];
    var hasil = '';
    for (var i = 0; i < str.length; i++) {
        strNew.push(str[i])
    }
    for (var j = 0; j < strNew.length; j++) {
        for (k = 0; k < strNew.length - 1; k++) {
            if (strNew[k] > strNew[k + 1]) {
                var tampung = strNew[k];
                strNew[k] = strNew[k + 1];
                strNew[k + 1] = tampung
            }
        }
    }
    for (var l = 0; l < strNew.length; l++) {
        hasil += strNew[l]
    }

    return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
console.log(urutkanAbjad(5623523)); // 'ehllo'