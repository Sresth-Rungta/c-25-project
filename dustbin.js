class Dustbin{
    constructor(x,y,width,height){
      
       var options={
           isStatic:true,
           
       }
      this.body= Bodies.rectangle(x,y,width,height,options)
      this.width = width
      this.height = height
      World.add(world,this.body)

      this.dustbin = loadImage("dustbin.png")
      this.paper = loadImage("paper.png")

      
    }
   display(){
    image(this.dustbin,200,20)
    image(this.paper,170,20)
       noStroke();
       fill("orange")
       rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height)
   }
   }