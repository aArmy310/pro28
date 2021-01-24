class MangoClass{ 
   constructor(x, y){
    //super(x,y,50,50);
       var options ={
           isStatic:true,
           restitution:0,
           friction:1,
       }
       this.body = Bodies.circle(x,y,options);
        
        this.image = loadImage("Plucking+mangoes\img/mango.png");
        World.add(world, this.body);
    }
     
    display(){
        
    }
        
}