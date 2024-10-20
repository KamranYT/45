"use strict";
// function greet(): void {
//     console.log("Hello!");
// }
// function doSomething(): void {
//     // Do something...
//     return; // OK
// }
// function doSomethingElse(): void {
//     // Do something else...
//     return undefined; // Also OK
// }
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(92, 3));
