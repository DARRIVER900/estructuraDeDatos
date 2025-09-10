function coladeradeErastones() {
    let n = [1000];
    let primo = new Array(n);

    for(let i = 2; i < n; i++) {
        // quitar multiplos
        for(let j = 2; i * j < n; j++) {
          primo[i * j] = false;
        }
      }

    for(let i = 0; i < n; i++) {
      primo[i] = true;
      console.log([i]);
    }
  }