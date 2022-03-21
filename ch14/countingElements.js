// TODO: write the countElements() function here

function countElements(string) {
    const length = Array.from(document.querySelectorAll(string)).length;
    return length;
}

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2