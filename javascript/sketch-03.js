var width = 1000;
var height = 1000;

/* var p = 0; // 40번째줄 더하면서. 이걸 어디 두느냐에따라 유효범위 달라져
*/

function setup() {
    createCanvas(1000, 1000);
    background(240, 130, 80);
    angleMode(DEGREES);
    
    translate(500, 500);
    rotate(90);
    fill(100, 120, 80, 100);
    stroke(130, 10, 40, 30);
    strokeWeight(3);
    rect(0, 0, 50, 200);


    var i = 0;
    while (i < 100) {
        rotate(i);
        fill(255, 80, 120);
        stroke(0);
        strokeWeight(1);
        rect(0, 0, 20, 500);

        i++; // i++ means i = i + 1, i--; means i = i -1
    }

    /*for (var i = 0; i < 100; i++) {
        rotate(i);
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(0, 0, 50, 200);
    }*/
}
    

    if (p == 1) {
    translate(0, 0);
    fill(255, 0, 0);
    ellipse(500, 600, 100, 100);

}

function draw(){
    fill(229, 235, 52);
    noStroke();
    rect(mouseX, mouseY, random(50, 80), random(50, 80));
}



function mousePressed(){
    saveCanvas("sketch-03", "png")
    }

