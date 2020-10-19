function diagonalDifference(arr) {
var n = arr.length;
var diag1 = 0;
var diag2 = 0; 
for(var i=0; i<n; i++){ 
     for(var j=0; j<n; j++){
         if(i === j) { 
            diag1 += arr[i][j];
            } 
           if(j=(arr.length)-1-i){
              diag2 += arr[i][j];
         } 
        } 
    } 
    return Math.abs(diag1 - diag2);

}
