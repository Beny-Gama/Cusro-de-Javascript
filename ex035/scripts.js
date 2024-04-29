// Math
// math é uma bibliota do JS para pazer operaões matematicas
// mezila: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.max(34,54,22,11));

console.log(Math.random());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;  
}

console.log(getRandomArbitrary(1, 42));