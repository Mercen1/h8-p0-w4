function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    var hasil = [];
    var tampung = {};
    var pembeli = [];
    var product = [];
    var totalProfit = 0;
    var leftOver = [];
    var totalProfit = [];
    var startOver = [];

    for (i = 0; i < listBarang.length; i++) {
        var tampung = []
        startOver[i] = listBarang[i][2]
        for (j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === listBarang[i][0]) {
                if (listBarang[i][2] >= shoppers[j].amount) {
                    tampung.push(shoppers[j].name);
                    listBarang[i][2] -= shoppers[j].amount;
                }
            }
        }
        pembeli.push(tampung);
        product.push(listBarang[i][0]);
        leftOver.push(listBarang[i][2]);
        totalProfit.push(listBarang[i][1] * (startOver[i] - leftOver[i]));
    }
    if (shoppers.length === 0) {
        hasil = [];
    } else {
        for (let k = 0; k < listBarang.length; k++) {
            hasil[k] = {
                product: product[k],
                shoppers: pembeli[k],
                leftOver: leftOver[k],
                totalProfit: totalProfit[k]
            }
        }
    }


    return hasil;
}

// // TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]