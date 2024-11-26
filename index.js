function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    return "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}



  // Write your code here!
  function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  



  // Write your code here!
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  }
  
  console.log(scuberGreetingForFeet(199));  // "This one is on me!"
  console.log(scuberGreetingForFeet(1500)); // "That will be 20 dollars."
  console.log(scuberGreetingForFeet(2200)); // "I will gladly take your thirty bucks."
  console.log(scuberGreetingForFeet(3000)); // "No can do."
  
  console.log(ternaryCheckCity("NYC"));     // "Ok, sounds good."
  console.log(ternaryCheckCity("LA"));      // "No go."
  
  console.log(switchOnCharmFromTip("generous"));       // "Thank you so much."
  console.log(switchOnCharmFromTip("not as generous"));// "Thank you."
  console.log(switchOnCharmFromTip("anything else"));  // "Bye."
