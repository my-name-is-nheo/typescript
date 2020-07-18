var count;
var b;
var c;
var d;
var e = [1, 2, 3]; // array with any number
var f = [1, false, "string"];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //value automatically increments
var backGroundColor = Color.Red;
function greeter(name) {
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
var message;
message = "Hello Nick";
var messageEndsWithK = message.endsWith("k");
//or
var message1;
message1 = "hello nick";
var messageEndsWithK1 = message1.endsWith("k");
//or
var message2;
message2 = "Hello Nick";
var messageEndsWithK2 = message2.endsWith("k");
var drawPoint = function (point) {
    //...
};
var getDistance = function (pointA, pointB) {
    //....
};
drawPoint({
    x: 1,
    y: 2
});
/*
Cohesion - things that are related should be in one unit. Example above violates the cohesion principle of typescript. They should all be in a class, group variables (properties) and functions (Methods) that are highly related.

Everything related to Point should be in one class.
*/
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    Point1.prototype.draw = function () {
        //...
        console.log("X: " + this.x + "Y: " + this.y);
    };
    Point1.prototype.getDistance1 = function (another) {
        //...
    };
    return Point1;
}());
var point = new Point1();
point.x = 2;
point.y = 4;
point.draw();
