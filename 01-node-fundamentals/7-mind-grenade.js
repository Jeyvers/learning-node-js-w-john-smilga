const num1 = 5;
const num2 = 7;

function addValues() {
 console.log(`the sum is ${num1 + num2} `);
}

addValues();

// in app.js requiring "./7-mind-grenade" will log the sum in addValues because if a function is called in a file, it doesn't need to be exported before it'll run in node. That's what makes this a mind grenade.
