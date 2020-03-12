function changeMe(arr) {
    if (arr.length === 0) {
        console.log('""');
    }
    var data = {};
    var depan = '';
    for (i = 0; i < arr.length; i++) {
        depan = i + 1. + ' ' + arr[i][0] + ' ' + arr[i][1] + ':';
        data.firstName = arr[i][0];
        data.lastName = arr[i][1];
        data.gender = arr[i][2];
        data.age = 2020 - arr[i][3];

        if (!arr[i][3] || data.age < 0) {
            data.age = 'Invalid Birth Year'
        }
        console.log(depan)
        console.log(data)
    }

    return null;
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982],['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""