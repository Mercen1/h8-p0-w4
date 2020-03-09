function shoppingTime(memberId, money) {
    var list = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ];
    var hasil = {};

    for (i = 0; i < list.length; i++) {
        for (j = 0; j < list.length - 1; j++) {
            if (list[j][1] < list[j + 1][1]) {
                var tampung = list[j]
                list[j] = list[j + 1]
                list[j] = tampung
            }
        }
    }
    var belanja = [];
    var k = 0;
    var uang = money;
    while (uang >=list[list.length - 1][1] && k < list.length) {
        if (uang >= list[k][1]) {
            belanja.push(list[k][0])
            uang = uang - list[k][1]
        }

        k++;
    }
    if (!memberId || !money) {
        hasil = 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < list[list.length - 1][1]) {
        hasil = 'Mohon maaf, uang tidak cukup'
    }

    hasil.memberId = memberId;
    hasil.money = money;
    hasil.listPurchased = belanja;
    hasil.changeMoney = uang;
    return hasil;

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja