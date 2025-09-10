let sueldo = 1000 

if (sueldo <= 1000) {
    sueldo += sueldo * 0.18;
} else {
    if(sueldo <= 1200){
        sueldo += sueldo * 0.15;
    } else {
        if(sueldo <= 1450){
            sueldo += sueldo * 0.12;
        } else {
            if(sueldo <=1600){
                sueldo *= 1.10;
            } else {
                sueldo*=1.08;
            }
        }
    }

    
}
console.log(sueldo);
