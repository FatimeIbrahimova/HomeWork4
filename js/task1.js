let number=2354;
let maxDigit=0;
let digit=0;
while(number>0){
    digit=num%10;
    number=(number-(number%10))/10;
    number++;
    if(digit>maxDigit){
        maxDigit=digit;
}
console.log(maxDigit);
}