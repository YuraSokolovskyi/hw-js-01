let input = prompt("Enter number: ");
const numbers = []
while (input !== null){
    numbers.push(parseInt(input))
    input = prompt("Enter number: ");
}
let total = 0;
for (let i of numbers){
    total += i
}
console.log(`Final value is ${total}`)