function arrayRepetidos() {
    let array = [2, 4, 6, 7, 6, 8, 9, 9, 10, 11, 10]; // array con elementos repetidos
    
    for(let i = 0; i < array.length; i++ ) {
        for(let j = i + 1; j < array.length; j++ ) {
            if(array[i] == array[j]) {
                return true;
            }
    }
  }
  return false;
}
    console.log(arrayRepetidos());
