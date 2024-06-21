function setup()  {
    createCanvas(800, 800) ;
    background("red") ;
  }
  
  function draw() {
    
    stroke("pink");
    fill("blue");
    
    // console.log(moueIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
    }
  }