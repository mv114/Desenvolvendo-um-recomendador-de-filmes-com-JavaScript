let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@filme de comédia");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("filme de ficção");
  campoAventura = createCheckbox("filme de futebol ");
}

function draw() {
  background("#8BC34A");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(6, 10, 15));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "16";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "filme lá casa de papel";          
        } else{
         return "filme do homem aranha";
        }
      } else {
        if (gostaDeFantasia) {
          return "filme divertidamente";
        } else {
          return "filme bela fera";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "filme cinderela";
    } else {
      return "filme meus 15 anos";
    }
  }
}
