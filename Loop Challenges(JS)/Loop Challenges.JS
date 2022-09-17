function printOdds(){
    for (var i=1;i<20;i+=2){
        console.log(i)
    }
}
printOdds();

function printDecreasingMultiplesOfThree(){
    for (var i=100;i>0;i--){
        if (i % 3 == 0){
            console.log(i)
        }
    }
}
printDecreasingMultiplesOfThree();

function printTheSequence(){
    for (var i=4;i>-4;i-=1.5){
        console.log(i)
    }
}
printTheSequence();

function printSigma(){
    var sum = 0;
    for (var i=0;i<=100;i++){
        sum = sum + i;
    }
    console.log(sum);
}
printSigma();

function printFactorial(){
    var product = 1
    for (var i=1;i<=12;i++){
        product = product * i;
    }
    console.log(product)
}
printFactorial();