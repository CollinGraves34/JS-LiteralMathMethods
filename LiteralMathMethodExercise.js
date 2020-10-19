// The Literal Math Method Exercise

var warmHugs = "Hi, I’m Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());

var warmHugs = warmHugs.replace("like", "Love");
console.log(warmHugs.toUpperCase());

var beenImpaled = "Oh, look at that. I’ve been impaled!";
console.log(beenImpaled.slice(-18));
//or
console.log(beenImpaled.slice(18));
// varName.slice(start, end);

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// PI 3.14...
console.log(Math.PI);

var randomNum = Math.floor(Math.random() * 3);
console.log(randomNum);


//Bonus
var string = "Let It Go!" + " and change it to “LET IT GO! LET IT GO!";
var turtleButts = "Bright side? Turtles can breathe through their butts."

turtleButts = turtleButts.replace(/ /g, '_');;
console.log(turtleButts);

console.log(Math.sqrt(2));

var newRandomNumber = Math.floor(Math.random() * ((23 - 7) + 7));
console.log(newRandomNumber);