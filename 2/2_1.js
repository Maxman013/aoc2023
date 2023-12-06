const fs = require("fs");
let input = fs.readFileSync("2.txt", {encoding: "utf8"}).split('\n');

let sum = 0;
for (i = 0; i < input.length; i++) {
    let line = input[i].split(':')[1].substring(1);
    console.log(line);
}

console.log(sum);