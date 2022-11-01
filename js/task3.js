let num=2821;
let temp=num;
let sum1=0;
let sum2=0;
for(let i=1;temp>0;i++){
    let num=temp%10;
    temp=Math.floor(temp/10);
    if(i%2!==0){
        sum1+=num;
    }else{
        sum2+=num;
    }
    
}
console.log("tek terde duranlarin cemi:",sum1);
console.log("cut yerde duranlarin cemi:",sum2);
console.log("Multiple:"+sum1*sum2);