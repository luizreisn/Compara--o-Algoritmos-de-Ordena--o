function countSort(v) {
  const vetor = [...v];
  const min = valorMin(vetor);
  const max = valorMax(vetor);
  return algorithmCountSort(vetor, min, max);
}

function algorithmCountSort(v, min, max) {
  const vetorOriginal = [...v];
  let trocas = 0,
    count = [];

  const len = v.length;

  for (let i = 0; i <= max; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < len; i++) {
    count[v[i]] += 1;
  }

  for (let i = min, j = 0; i <= max; i++) {
    let qtdVezesNumeroApereceAnteriormenteVetorAtual = 0;
    while (count[i] > 0) {
      if (i !== v[j]) {
        trocas++;
        v[j] = i;
      } else {
        let contVezesNumeroApareceVetorOriginal = 0;
        for (let k = 0; k < j; k++) {
          if (vetorOriginal[k] === i) {
            contVezesNumeroApareceVetorOriginal++;
          }
        }

        if (
          qtdVezesNumeroApereceAnteriormenteVetorAtual !==
          contVezesNumeroApareceVetorOriginal
        ) {
          trocas++;
          v[j] = i;
        }
      }

      j++;
      count[i]--;
      qtdVezesNumeroApereceAnteriormenteVetorAtual++;
    }
  }
  return trocas;
}

function valorMin(vetor) {
  return Math.min.apply(Math, vetor);
}

function valorMax(vetor) {
  return Math.max.apply(Math, vetor);
}

