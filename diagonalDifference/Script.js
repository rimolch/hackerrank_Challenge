function diagonalDifference(arr) {
var n = arr.length;
var diag1 = 0;
var diag2 = 0; 
for(var i=0; i<n; i++){ 
     for(var j=0; j<n; j++){
         if(i === j) { // for primary diagonal
            diag1 += arr[i][j];
            } 
           if(j=(arr.length)-1-i){ // for secondary diagonal
              diag2 += arr[i][j];
         } 
        } 
    } 
    return Math.abs(diag1 - diag2);// this will show tha absolute value of two difference  diagonal

}
