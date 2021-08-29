class Rope {
    constructor(bodyA, pointB){
        var options = {
            pointB : pointB,
            bodyA : bodyA,
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.rope)
    }

    display(){
        var pointB = this.pointB
        var pointA = this.rope.bodyA.position;

        
        push();
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
    }
}