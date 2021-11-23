var query = location.search.slice(1);
var partes = query.split('&');
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    tamanho = chaveValor[1];
});

var total = [];
    total[0]=0, 
    total[1]=0, 
    total[2]=0, 
    total[3]=0, 
    total[4]=0, 
    total[5]=0, 
    total[6]=0, 
    total[7]=0;

var media = [];
    media[0] = 0,
    media[1] = 0,
    media[2] = 0,
    media[3] = 0,
    media[4] = 0,
    media[5] = 0,
    media[6] = 0,
    media[7] = 0;

var nome = [];
    nome[0] = 'Bubble Sort',
    nome[1] = 'Selection Sort',
    nome[2] = 'Insertion Sort',
    nome[3] = 'Heap Sort',
    nome[4] = 'Merge Sort',
    nome[5] = 'Quick Sort',
    nome[6] = 'Count Sort',
    nome[7] = 'Radix Sort';

var escrita = '<br>' +
              '<div class = "text-center">' +
              '<h2>Vetores de tamanho ' + tamanho + '</h2>' + 
              '<br>';

if( tamanho != undefined){
    const vetores = gerarVetores(50, tamanho);

    function gerarVetores(quantidade, tamanho){
        const vetores = [];
        for(let i = 0; i < quantidade; i++){
            vetores.push(vetoresNumAleatorios(tamanho));
        }
        return vetores;
    }

    function vetoresNumAleatorios(tamanho){
        const vetor = [];
            for(let i = 0; i < tamanho; i++){
            vetor[i] = Math.floor(Math.random() * (99999 + 1));
        }
        return vetor;
    }
    
    for(let i = 0; i < vetores.length; i++){
        trocas = 0;

        trocas = bubbleSort(vetores[i]);
        total[0] += trocas;

        trocas = selectionSort(vetores[i]);
        total[1] += trocas;

        trocas = insertionSort(vetores[i]);
        total[2] += trocas;
        
        trocas = heapSort(vetores[i]);
        total[3] += trocas;
        
        trocas = mergeSort(vetores[i]);
        total[4] += trocas;
        
        trocas = quickSort(vetores[i]);
        total[5] += trocas;
        
        trocas = countSort(vetores[i]);
        total[6] += trocas;
        
        trocas = radixSort(vetores[i]);
        total[7] += trocas;
    }

    for(let j = 0; j < total.length; j++){
        media[j] = total[j] / 50;
        console.log(nome[j] + ' total: ' + total[j]);
        console.log(nome[j] + ' media: ' + media[j]);
    }

    for(let r = 0; r < nome.length; r++){
        escrita += '<h4>O algoritmo ' + nome[r] +  ' teve ' + total[r] + ' trocas.</h4>' +
                   '<br>' +
                   '<h4>A media de trocas no algortimo ' + nome[r] + ' é ' + media[r] + ' .</h4>' +
                   '<br>';
    }
    escrita += '</div>';

    document.getElementById('resultado').innerHTML = escrita;
}
