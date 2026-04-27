document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // VALIDATION
  if (day < 1 || day > 31) {
    alert("Enter a valid day (1-31)");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Enter a valid month (1-12)");
    return;
  }

  if (gender === "") {
    alert("Select a gender");
    return;
  }

  // SPLIT YEAR
  let CC = Math.floor(year / 100);
  let YY = year % 100;

  // FORMULA
  let d = Math.floor(
    (4 * CC -
      2 * CC -
      1 +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day) %
      7,
  );

  if (d < 0) {
    d += 7;
  }

  // ARRAYS
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let maleNames = [
    "Alex",
    "James",
    "Michael",
    "Xander",
    "Christian",
    "Javier",
    ,
  ];
  let femaleNames = ["Britney", "Laura", "Megan", "Lorena", "Brianna", "Katrina"];

  let name = gender === "male" ? maleNames[d] : femaleNames[d];

  // OUTPUT
  document.getElementById("result").innerText =
    "You were born on a " + days[d] + " and your Akan name is " + name + ".";
});
