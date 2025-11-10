
const userInput = prompt("Please enter a list of comma-separated froyo flavors:");
const words = userInput.split(",");

const order = {};
for(let i = 0; i < words.length; i++) {
  if(words[i] in order === false) {
    order[words[i]] = 0;
  }
  order[words[i]]++;
}

console.log("Here is the number of servings you have ordered of each flavor:")
for(const key in order) {
  console.log(`${key}: ${order[key]}`);
}
