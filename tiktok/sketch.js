var h;
var m;
var s;

var hAngle;
var sAngle;
var mAngle;


function setup() {
  createCanvas(400,400);

  //changing angle to degrees
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)

  h = hour()
  m = minute()
  s = second()

  //to set rotation for each hand

  sAngle = map (s, 0 , 60 ,0 , 360);

  mAngle = map (m, 0 , 60 ,0 , 360);

  hAngle = map (h%12 ,0 ,12 ,0,360);

  // 255,0,0 = red
  // 0,255,0 = green
  // 0,0,255 = blue

  //creating seconds hand

  push()
  rotate(sAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  //creating minute hand

  push()
  rotate(mAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,65,0)
  pop()

  //creating hour hand

  push()
  rotate(hAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,45,0)
  pop()



stroke(255,255,255)
strokeWeight(10)
noFill()
point(0,0)

// arc for the second hand

stroke(255,0,0)
arc(0,0,300,300,0,sAngle)

// arc for the minute hand

stroke(0,255,0)
arc(0,0,280,280,0,mAngle)

// arc for the hour hand

stroke(0,0,255)
arc(0,0,260,260,0,hAngle)




  drawSprites();
}