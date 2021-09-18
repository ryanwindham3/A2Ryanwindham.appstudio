
let = firstName=prompt("What is your first name?")
let = State=prompt("What is your state? In 2 letters. NE")
let = Temp= Number(prompt("What is the temperature in fahrenheit"))

const messages = [];
messages [0] = "	wear a warm coat, hat, scarf and gloves."
messages [1] = "	wear a warm coat but you won't need a hat, scarf or gloves."
messages [2] = "	wear your warmest coat, a warm hat, a scarf, and warm gloves."
messages [3] = "wear a warm coat, hat and gloves. Maybe a scarf too."


if (Temp<32 && State == "NE"){
console.log(messages[0])}

 else if (Temp >= 32 && Temp <= 50 && State == "NE"){
console.log(messages[1])}

 else if (Temp >= 32 && Temp <= 50 && State == "FL"){
console.log(messages[2])}

 else if (Temp >= 50 && Temp <= 70 && State == "FL"){
console.log(messages[3])}

else {
  console.log("Try again!")
  }
