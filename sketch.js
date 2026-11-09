function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(245, 240, 225);
  noStroke();

push();
//push é usado para salvar o estado atual da transformação, ou seja, ajuda a manter somente as formas centradas.
  
translate(width / 2 - 275, height / 2 - 365);
  //translate é usado para mover o ponto de origem do conjunto de coordenadas.
   
  fill(230, 50, 40);
    rect(100, 100, 200, 200);

    fill(245, 195, 30);
    rect(350, 100, 100, 300);

    fill(20, 50, 150);
    circle(200, 450, 180);
    pop();
    //pop é usado para restaurar o estado anterior da transformação, ou seja, desfaz a translação aplicada anteriormente.

  if (mouseX > width / 2) {
    fill(230, 50, 40);
  } else {
    fill(245, 195, 30);
  }

  let tamanho;

  if (mouseY > height / 2) {
    tamanho = 200;
  } else {
    tamanho = 100;
  }
  if (mouseIsPressed) {
    rect(mouseX, mouseY, tamanho, tamanho);
  } else {
    circle(mouseX, mouseY, tamanho);
    //se pressionar vira um rect se não continua um circulo.
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Ajusta automaticamente a tela ao tamanho da janela, mantendo a composição centrada.
}