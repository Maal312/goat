var ujamaa=0//The setup function only happens once
function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
  background(173,216,230)
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //an RGB color for the canvas' background
  //circle
  stroke(0,102,0); // an RGB color for the circle's border
  fill(0,0,0,0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(ujamaa,300,60,60); // center of canvas, 20px dia
  fill(198,40,40);
  ellipse(439,300,60,60);
  textFont("Papyrus");
  textSize(40);
  text('United We Stand',100,mouseX,);
  stroke('red');
  strokeWeight(5);
  line(100, mouseX+10, 400 , mouseX+10);


}
function mousePressed(){
  if (ujamaa>=500) {
    ujamaa=0;
  }else{
    ujamaa=ujamaa+10;
  }


}
