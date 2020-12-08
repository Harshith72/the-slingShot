class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options);
        World.add(userWorld, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {

        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            stroke(50,57,57);

            line(pointA.x , pointA.y, pointB.x , pointB.y);
        }
    }
}