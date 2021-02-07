class Drops {
    constructor(x,y,radius){
        var options= {
        restitution:0.1,
        friction:0.1,
        density:1.2,
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,radius,options);
   // this.trajectory= [];
    
    World.add(world,this.body);
}
display(){
    
    var pos =this.body.position;
     push();
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(pos.x, pos.y, this.radius);
    
   // if(this.body.velocity.x > 10 && this.body.position.x > 200){
       // var position=[this.body.position.x,this.body.position.y];
    //  this.trajectory.push(position);
      var maxDrops=100;
      for(var i = 0; i< maxDrops ;i++){
        Drops.push(new createDrop(random(0,400),random(0,400)));
      
      }
      pop();
}
}