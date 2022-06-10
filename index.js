function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return ("This one is on me!");
  } 
  else if (1999 < feet && feet < 2500) {
    // distance covered is more than 2000 feet but less than 2500 feet
    return ("I will gladly take your thirty bucks.");
  }
  else (feet > 2500); {
    // no rides above 2500 feet
    return ("No can do.");
  }
}

  
function ternaryCheckCity(city) {
  return city == "NYC" ? "Ok, sounds good.": "No go.";
  // city of choice here is NYC
}

function switchOnCharmFromTip(tip) {
  // Re-read again on switch functions!
  switch (tip) {
    case ("generous"):
      return ("Thank you so much.");
  }
  switch (tip) {
    case ("not as generous"):
      return ("Thank you.");
    default: 
    return ("Bye.");
  }
}