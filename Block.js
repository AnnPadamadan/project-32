class Block extends BaseClass {
  
  constructor(x, y, width, height){
    super(x,y,width,height);
    
    this.color = color(random(0, 255),random(0, 255),random(0, 255))
    this.Visibility = 255;
    
  }
   score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
    }
    }
  
display(){
 
  if(this.body.speed<3){
    super.display()
    
  }
  else{
    World.remove(world, this.body);
    push()
    

this.Visibility = this.Visibility-5;   
    tint(0, this.Visibility)
    

    
    
    pop()

    
    
    
  }
  



  }
  

};

  

  