//Listen for when the form is submitted
document.getElementById("akanForm").addEventListener("submit", function (event) {
  
  //Prevent the page from refreshing when the form is submitted
    event.preventDefault();

//1. Get user input

//Get the values entered by the user and convert them to numbers
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  //Get the selected gender
  let gender = document.getElementById("gender").value;

  // 2. Validate input

  //Check if the day is valid (1-31)
  if (day < 1 || day > 31) {
    alert("Enter a valid day (1-31)");
    return; //Stop the program if invalid
  }

  //Check if the month is valid (1-12)
  if (month < 1 || month > 12) {
    alert("Enter a valid month (1-12)");
    return; //Stop the program if invalid
  }

  //Check if the user has selected a gender
  if (gender === "") {
    alert("Select a gender");
    return; //Stop the program if no gender is selected
  }

  // 3. Split the year

  //CC = century (first two digits of the year)
  let CC = Math.floor(year / 100);
  //YY = year (last two digits of the year)
  let YY = year % 100;

  // 4. Apply the formula
  //This formula calculates the day of the week (0-6) based on the given date
  // Math.floor used to remove decimals
  let d = Math.floor(
    (4 * CC -
      2 * CC -
      1 +   //Part of century calculation
      Math.floor((5 * YY) / 4) +    //Year calculation
      Math.floor((26 * (month + 1)) / 10) + //Month calculation
      day)  //Add the day
      % 7,  //Modulus to get the range of 0-6
  );

  //If the result is negative, convert it to a positive value by adding 7 (7 days in a week)
  if (d < 0) {
    d += 7;
  }

  // 5. Store data in arrays

  //Days of the week,
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //Akan names for males
  let maleNames = [
    "Alex",
    "James",
    "Michael",
    "Xander",
    "Christian",
    "Javier",
    ,
  ];

  //Akan names for females
  let femaleNames = [
    "Britney",
    "Laura",
    "Megan",
    "Lorena",
    "Brianna",
    "Katrina",
  ];

  // 6. Determine the name

  //Use a ternary operator(if/else)to select the appropriate name
  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];    //Pick from male array
  } else {
    akanName = femaleNames[d];  //Pick from female array
  }

  // 7. Display the result
  //Show the result on the webpage
  document.getElementById("result").innerText = "You were born on a " + days[d] + " and your Akan name is " + akanName + ".";
  
});
