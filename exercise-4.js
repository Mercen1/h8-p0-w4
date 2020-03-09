function cariModus(arr) {
  var kembar=[];
  var sudah=[];
  var hasil;
  var jumlah
  

  for(i=0;i<arr.length-1; i++){
    var tampung=[];
    for(j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]&&sudah[j]!==true&&sudah[i]!==true){
        kembar.push(arr[j]);
        sudah[j]=true;
        sudah[i]=true;
      }
    }
    console.log(sudah[j],sudah[i],kembar)
    if( kembar.length>0){
      tampung.push(kembar);
      
    }
    
  }


  return kembar;

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  // console.log(cariModus([5, 10, 10, 6, 5])); // 5
  // console.log(cariModus([10, 3, 1, 2, 5])); // -1
  // console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  // console.log(cariModus([7, 7, 7, 7, 7])); // -1
  // console.log(cariModus([1, 2, 3, 3,3, 4,4, 5])); // 3