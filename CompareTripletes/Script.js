function compareTriplets(a,b){
const count = [0,0];
for( let i = 0; i<3 ; i++){
    a[i]> b[i]
    ? count[0]++
    : a[i] < b[i]
    ? count[1]++
    :count[1] = count[1]
}
return count;
}
