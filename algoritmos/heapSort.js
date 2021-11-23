let tamanho;
let trocas = 0;

function heapSort(v) {
  trocas = 0;
  let vetor = [...v];
  tamanho = vetor.length;

  for (let i = Math.floor(tamanho / 2); i >= 0; i -= 1) {
    heapRoot(vetor, i);
  }

  for (let i = vetor.length - 1; i > 0; i--) {
    swap(vetor, 0, i);
    tamanho--;

    heapRoot(vetor, 0);
  }

  return trocas;
}

function swap(vetor, index_A, index_B) {
  let temp = vetor[index_A];
  vetor[index_A] = vetor[index_B];
  vetor[index_B] = temp;
  trocas++;
}

function heapRoot(vetor, i) {
  let esquerda = 2 * i + 1;
  let direita = 2 * i + 2;
  let max = i;

  if (esquerda < tamanho && vetor[esquerda] > vetor[max]) {
    max = esquerda;
  }

  if (direita < tamanho && vetor[direita] > vetor[max]) {
    max = direita;
  }

  if (max != i) {
    swap(vetor, i, max);
    heapRoot(vetor, max);
  }
}


