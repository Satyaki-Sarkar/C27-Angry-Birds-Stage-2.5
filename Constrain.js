class ConstrainBody {
    constructor(bodyA, bodyB){
        var options={
            stiffness : 1,
            bodyA : bodyA,
            bodyB : bodyB,
            length : 250
        }

        this.chain= Constraint.create(options);

        World.add(world,this.chain);
        console.log(this.chain);
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}