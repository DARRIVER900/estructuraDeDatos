function fibonacci(x){
if(x == 1){
    return 0;
} else if(x == 2){
    return 1;
} else if(x > 2){
    return fibonacci(x - 1) + fibonacci(x - 2);
} 
}
console.log(fibonacci(3));