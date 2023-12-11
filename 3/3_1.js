const fs = require("fs");
let input = fs.readFileSync("2.txt", {encoding: "utf8"}).split('\n');
let board = [];

let sum = 0;
for (i = 0; i < input.length; i++) {
    board.push(input[i].split(''));

}

console.log(board);
console.log(sum);