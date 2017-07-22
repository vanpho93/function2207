//class
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// function Line(pointA, pointB) {
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.getLength = function() {
//         const dx = this.pointA.x - this.pointB.x;
//         const dy = this.pointA.y - this.pointB.y;
//         return Math.sqrt(dx * dx + dy * dy);
//     }
// }

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}


class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getPerimeter() {
        const lineAB = new Line(this.pointA, this.pointB);
        const lineAC = new Line(this.pointA, this.pointC);
        const lineBC = new Line(this.pointB, this.pointC);
        return lineAB.getLength() + lineAC.getLength() + lineBC.getLength();
    }
}
// function Triangle(pointA, pointB, pointC) {
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.pointC = pointC;
//     this.getPerimeter = function() {
//         const lineAB = new Line(this.pointA, this.pointB);
//         const lineAC = new Line(this.pointA, this.pointC);
//         const lineBC = new Line(this.pointB, this.pointC);
//         return lineAB.getLength() + lineAC.getLength() + lineBC.getLength();
//     }
// }

const diemA = new Point(0, 0);
const diemB = new Point(1, 0);
const diemC = new Point(0, 1);
const doanAB = new Line(diemA, diemB);
const tamGiacABC = new Triangle(diemA, diemB, diemC);
console.log(doanAB.getLength());
console.log(tamGiacABC.getPerimeter());
