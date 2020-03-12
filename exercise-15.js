function highestScore(students) {
    // Code disini
    var hasil = {}
    for (let i = 0; i < students.length; i++) {
        var cek = false;
        for (let key in hasil) {
            if (students[i].class === hasil[key]) {
                cek = true;
            }
        }
        if (!cek) {
            hasil[students[i].class] = {}
            var tampung = 0;
            for (let j = 0; j < students.length; j++) {
                if (students[i].class === students[j].class) {
                    if (tampung < students[j].score) {
                        tampung = students[j].score 
                    }
                    hasil[students[i].class].name = students[j].name
                    hasil[students[i].class].score = tampung
                }
            }
        }
    }

    return hasil;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}