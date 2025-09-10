function invertir(string){
    let separar = string.split("");
    for(let i = 0; i < separar; i++){
        separar.reverse();
    }
}
console.log(buscar(2,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function buscar(codigo, arr) {
    let min = 0;
    let max = arr.length-1;
    while(min <= max) {
        const mitad = Math.floor((min + max)/2);
        if(arr[mitad] > codigo)
            max = mitad - 1;
        else if(arr[mitad] < codigo)
            min = mitad - 1; 
        else
            return mitad;  
    }
      
}