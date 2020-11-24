class Ball{

    constructor(x,y,r){
    
        var option={
            restitution :0.6,
            friction :0.5,
            density:1
            
        }
        
        this.r=r;
       
            
    this.body= Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    
    }
    
    
    
    
    
    
    display(){
    
        var pos= this.body.position;
    
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    
    }
        
    }