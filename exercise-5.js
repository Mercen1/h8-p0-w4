function ubahHuruf(kata) {
    const adjab = 'abcdefghijklmnopqrstuvwxyz'
    var kataNew = '';
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < adjab.length-1; j++) {
            if (kata[i] === adjab[j]) {
                kataNew += adjab[j + 1]
            }
        }
        if (kata[i] === 'z') {
            kataNew += 'a';
        }
    }
    
    return kataNew;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zakazekezu')) ;// Tambah Untuk tes z