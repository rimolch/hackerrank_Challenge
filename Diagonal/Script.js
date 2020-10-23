function diagonalDifference(arr) { 
var n = arr.length; 
var d1 = 0;
var d2 = 0; 
  for(var i=0; i<n; i++){ 
        for(var j=0; j<n; j++){
// let's find the primary diagonal 
  if(i === j) {
        d1 += arr[i][j];
       }
// let's find the secondary diagonal
      if(i + j === n - 1){
        d2 += arr[i][j];
       } 
        } 
    }
return Math.abs(d1 - d2);
}




