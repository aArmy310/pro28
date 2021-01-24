class StoneClass{
    constructor(x, y){
        //super(x,y,50,50);
        this.image = loadImage("Plucking+mangoes/img/stone.png");
        var options = {
            bodyA: bodyA,
            isStatic:false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,options);
        
        World.add(world, this.body);
    }
    fly(){
        this.sling.bodyA  = null;
    }
    display(){
        image(this.image, 0, 0)
        super.display();
     }
    }