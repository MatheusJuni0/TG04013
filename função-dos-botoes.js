var imagens1 = [

    "0001.jpg",
    "0003.jpg",
    "0005.jpg",
    "0007.jpg",
    "0009.jpg",
    "0011.jpg",
    "0013.jpg",
    "0015.jpg",
    "0017.jpg",
    "0019.jpg",
    "0021.jpg",
    "0023.jpg",
    "0025.jpg",
    "0027.jpg",
    "0029.jpg",
    "0031.jpg",
    "0033.jpg",
    "0035.jpg",
    "0037.jpg",
    "0039.jpg",
    "0041.jpg",
    "0043.jpg",
    "0045.jpg",
    "0047.jpg",
    "0049.jpg",
    "0051.jpg",
    "0053.jpg",
    "0055.jpg",
    "0057.jpg",
    "0059.jpg",
    "0061.jpg",
    "0063.jpg",
    "0065.jpg",
    "0067.jpg",
    "0069.jpg",
    "0071.jpg",
    
    ]
    
    var imagens2 = [
    
    "0002.jpg",
    "0004.jpg",
    "0006.jpg",
    "0008.jpg",
    "0010.jpg",
    "0012.jpg",
    "0014.jpg",
    "0016.jpg",
    "0018.jpg",
    "0020.jpg",
    "0022.jpg",
    "0024.jpg",
    "0026.jpg",
    "0028.jpg",
    "0030.jpg",
    "0032.jpg",
    "0034.jpg",
    "0036.jpg",
    "0038.jpg",
    "0040.jpg",
    "0042.jpg",
    "0044.jpg",
    "0046.jpg",
    "0048.jpg",
    "0050.jpg",
    "0052.jpg",
    "0054.jpg",
    "0056.jpg",
    "0058.jpg",
    "0060.jpg",
    "0062.jpg",
    "0064.jpg",
    "0066.jpg",
    "0068.jpg",
    "0070.jpg",
    "simbolo exercito.png"
    
    ]

var indiceAtual1 = 0;
var indiceAtual2 = 0;

function trocar() {


    var pag1 = document.getElementById("pag1");
    var pag2 = document.getElementById("pag2");

    indiceAtual1 = (indiceAtual1 + 1) % imagens1.length;
    indiceAtual2 = (indiceAtual2 + 1) % imagens2.length;

    pag1.src = imagens1[indiceAtual1];
    pag2.src = imagens2[indiceAtual1];


    
}

function retroceder() {

    indiceAtual1 = (indiceAtual1 - 1) % imagens1.length;
    indiceAtual2 = (indiceAtual2 - 1) % imagens2.length;

    pag1.src = imagens1[indiceAtual1];
    pag2.src = imagens2[indiceAtual2];

    if (indiceAtual1 < 0) {
        indiceAtual1 = imagens1.length - 1;
        indiceAtual2 = imagens2.length - 1;
      }

      pag1.src = imagens1[indiceAtual1];
      pag2.src = imagens2[indiceAtual2]

}


var botao = document.getElementById('meu-botao')
var audio = document.getElementById('audio')

botao.addEventListener('click', function() {
    audio.play();
  });