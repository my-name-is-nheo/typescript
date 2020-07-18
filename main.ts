let count: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3]; // array with any number
let f: any[] = [1, false, "string"];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
} //value automatically increments

let backGroundColor = Color.Red;

function greeter(name: string) {
  return "hello, " + name;
}

// greeter("nick");

//concept of type assertions
/*
typescript may be confused with type of variable
type of message is "any", by default if type is not assigned the value is any

intellisense will not know what type of message is on messageEndsWithK. So we need to tell TS that message is in fact a string. We do this by type assertions

let message;
message = "Hello Nick";
let messageEndsWithK = message.endsWith("k");
*/

let message: string;
message = "Hello Nick";
let messageEndsWithK = message.endsWith("k");
//or
let message1;
message1 = "hello nick";
let messageEndsWithK1 = (<string>message1).endsWith("k");
//or

let message2;
message2 = "Hello Nick";
let messageEndsWithK2 = (message2 as string).endsWith("k");

/*
arrow function

interface

*/

//inline annotation
// annotating with custom type in this case an object
//with this interface I'm defining a shape of an object. when naming interfaces, use pascal naming intervention
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //...
};
let getDistance = (pointA: Point, pointB: Point) => {
  //....
};

drawPoint({
  x: 1,
  y: 2,
});

/*
Cohesion - things that are related should be in one unit. Example above violates the cohesion principle of typescript. They should all be in a class, group variables (properties) and functions (Methods) that are highly related.

Everything related to Point should be in one class.
*/

class Point1 {
  x: number;
  y: number;
  draw() {
    //...
    console.log("X: " + this.x + " Y: " + this.y);
  }
  getDistance1(another: Point) {
    //...
  }
}

let point = new Point1();
point.x = 2;
point.y = 4;
point.draw();
