function bubbleSort(v) {
    let trocas = 0;
  
    const vetor = [...v];
  
    for (let i = 0; i < vetor.length; i++) {
      for (let j = 0; j < vetor.length; j++) {
        if (vetor[j] > vetor[j + 1]) {
          let temp = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = temp;
          trocas++;
        }
      }
    }
    return trocas;
  }


