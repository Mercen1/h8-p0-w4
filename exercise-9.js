function checkAB(num) {
    var hurufA = [];
    var hurufB = [];
    var jarakAb = [];
    var hasil =false;

    for (i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            hurufA.push(i)
        } else if (num[i] === 'b') {
            hurufB.push(i)
        }
    }
    for (var j = 0; j < hurufA.length; j++) {
        for (var k = 0; k < hurufB.length; k++) {
            jarakAb.push(hurufA[j] - hurufB[k])
        }
    }
    for (let l = 0; l < jarakAb.length; l++) {
        if (jarakAb[l] === 4 || jarakAb[l] === -4) {
            hasil = true;
            break;
        }

    }

    return hasil;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false