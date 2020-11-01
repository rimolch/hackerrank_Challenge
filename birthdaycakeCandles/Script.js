
function birthdayCakeCandles(candles) {
var height = Math.max(...candles);
var blowOut = 0;
 for(let i = 0;i < candles.length;i++){
        if(candles[i] == height){
            blowOut = 2;
        }
    }
    return blowOut;
}
