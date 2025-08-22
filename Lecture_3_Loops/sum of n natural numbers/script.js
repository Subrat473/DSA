// sum of n natural numbers 


var ans = Number(prompt("kaha tak add karwaoge ?"));

if(isNaN(n)){
    console.log("Invalid Input");
} 
else{
    if(n > 0) {
        var sum = 0;
        for(var i = 1; i <= n; i++){
            sum = sum + i;
        }
    }
    else{
        console.log("should be +ve and more than 0");
        
    }
}