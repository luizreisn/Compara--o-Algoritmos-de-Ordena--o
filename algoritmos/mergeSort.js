let tamanhoVetorInicial = 0;

function mergeSort(v) {
  trocas = 0;

  if (tamanhoVetorInicial === 0) {
    tamanhoVetorInicial = v.length;
  }
  const vetor = [...v];
  let tamanho = vetor.length;
  if (tamanho < 2) {
    return vetor;
  }
  let meio = Math.floor(tamanho / 2),
    esquerda = vetor.slice(0, meio),
    direita = vetor.slice(meio);
  const merge_ = merge(mergeSort(esquerda), mergeSort(direita));

  if (merge_.length === tamanhoVetorInicial) {
    tamanhoVetorInicial = 0;
    return trocas;
  }
  return merge_;
}

function merge(esquerda, direita) {
  let resultado = [],
    tamanhoEsquerda = esquerda.length,
    tamanhoDireita = direita.length,
    e = 0,
    d = 0;
  while (e < tamanhoEsquerda && d < tamanhoDireita) {
    if (esquerda[e] < direita[d]) {
      resultado.push(esquerda[e]);
      e++;
    } else {
      trocas++;
      resultado.push(direita[d]);
      d++;
    }
  }
  return resultado.concat(esquerda.slice(e)).concat(direita.slice(d));
}

