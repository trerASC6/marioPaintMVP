function setup() {
    createCanvas(500,500);

    background(160, 250, 250);
    fill(250, 170, 170)
    rect(50, 200, 100, 100);
    fill(180, 83, 0);
    rect(200, 200, 100, 100);
    fill(50, 190, 250);
    rect(350, 200, 100, 100);
}
pink = fill(250, 170, 170)
brown = fill(180, 83, 0)
blue = fill(50, 190, 250)
//function mouseDragged() {
  //  rect(random()*100, random()*100, random()*100, random()*100);
//
//}

function mouseClicked() {
    if (mouseX <= 150 && mouseX >= 50 && mouseY >= 200 && mouseY <= 300) {
      fill("pink");
    } else if(mouseX <=300 && mouseX >= 200 && mouseY >= 200 && mouseY <= 300){
        fill("brown");
    } else if (mouseX <= 450 && mouseX >= 350 && mouseY >= 200 && mouseY <= 300){
    fill("blue");
    }
    else {};
}

function  mouseDragged() {
    rect(mouseX, mouseY, 50, 50);
  }

