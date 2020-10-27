// arrType = [1,2,3,4,5]
function miniMaxSum(arr) {
 let result = ''; 
 let sums = [];
 let resultArray = []; 
 let removeIndex = 0 ;
 while ( removeIndex < arr.length ){ 
 const sumArray = [...arr];
 sumArray.splice(removeIndex, 1);
 const sum = sumArray.reduce((sum,element) => sum + element ,0); 
        sums.push(sum);
        removeIndex++; 
    } 
    console.log(Math.min(...sums)+' '+Math.max(...sums))
} 
