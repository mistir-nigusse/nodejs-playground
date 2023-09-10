//How to working with json and fs

const fs = require('fs');

// Read the content of the file '1-json.json' and store it in a Buffer.
const dataBuffer = fs.readFileSync('1-json.json')

// Parse the JSON data from the Buffer into a JavaScript object.
const dataParsed = JSON.parse(dataBuffer);

// Modify the 'name' and 'age' properties of the JavaScript object.
dataParsed.name = "Mistir";
dataParsed.age = 24;

console.log(dataParsed)

// Convert the modified JavaScript object back to a JSON string.
const dataStringfied = JSON.stringify(dataParsed);

// Write the updated JSON string back to the '1-json.json' file, effectively overwriting its previous content.
fs.writeFileSync('1-json.json', dataStringfied);
