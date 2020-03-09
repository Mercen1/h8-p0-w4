function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil =[];
    var jarak = [];


    for(i=0;i<arrPenumpang.length;i++){
        var nilaiDari;
        var nilaiTujuan;
        for(j=0;j<rute.length; j++){
            if( rute[j]===arrPenumpang[i][1]){
                nilaiDari = j;
            }
            if(rute[j]===arrPenumpang[i][2]){
                nilaiTujuan=j;
            }
        }
        jarak.push(nilaiTujuan-nilaiDari);
    }

    for(k=0;k<arrPenumpang.length; k++){
        hasil[k]={
            penumpang : arrPenumpang[k][0],
            naikDari: arrPenumpang[k][1],
            tujuan: arrPenumpang[k][2],
            bayar : jarak[k]*2000
        }
    }
    return hasil;

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]