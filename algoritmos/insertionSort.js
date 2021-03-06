function insertionSort(v) {
    const vetor = [...v];
    let len = vetor.length;
    let trocas = 0;
  
    for (let i = 1; i < len; i++) {
      let chave = vetor[i];
      let j = i - 1;
      while (j >= 0 && vetor[j] > chave) {
        vetor[j + 1] = vetor[j];
        j = j - 1;
        trocas++;
      }
      vetor[j + 1] = chave;
    }
    return trocas;
  }