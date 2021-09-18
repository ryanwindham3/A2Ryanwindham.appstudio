//Get the input from the user 
let = firstName=prompt("What is your first name?")
let = State=prompt("What is your state? In 2 letters. NE")
let = Temp= Number(prompt("What is the temperature in fahrenheit"))

//Store messages so we can use later
const messages = [];
messages [0] = "	wear a warm coat, hat, scarf and gloves."
messages [1] = "	wear a warm coat but you won't need a hat, scarf or gloves."
messages [2] = "	wear your warmest coat, a warm hat, a scarf, and warm gloves."
messages [3] = "wear a warm coat, hat and gloves. Maybe a scarf too."

//IF the user does not input, then the code runs from the tempuratures and states
switch (true) {
case (Temp < 32 && State == "NE"):
  console.log(messages[0])
  break
case (Temp >= 32 && Temp <= 50 && State == "NE"):
  console.log(messages[1])
  break
case (Temp >= 32 && Temp <= 50 && State == "FL"):
  console.log(messages[2])
  break
case (Temp >= 50 && Temp <= 70 && State == "FL"):
  console.log(messages[3])
  break
default:
  console.log("Please try again!")
}
//done1