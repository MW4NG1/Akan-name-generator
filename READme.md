# Akan Name Generator

## Project Description
This is a simple JavaScript web application that calculates a user's day of the week based on their birth date and assigns them an Akan name depending on their gender.

The Akan naming system is based on Ghanaian culture, where names are given according to the day of the week a person is born.

## Features
- Takes user input (day, month, year, gender)
- Validates input data
- Calculates day of the week using a mathematical formula
- Displays:
  - Day of the week
  - Corresponding Akan name
- Simple form-based UI

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. User enters their birth date and selects gender
2. JavaScript validates the input
3. The program calculates the day of the week
4. Based on gender, it selects an Akan name from an array
5. The result is displayed on the screen

## Formula Used
The program uses a mathematical formula to determine the day of the week:
Where:
- CC = Century
- YY = Year (last two digits)
- M = Month
- D = Day

## Akan Name Examples
### Male Names
- Kwasi
- Kwadwo
- Kwabena
- Kwaku
- Yaw
- Kofi
- Kofi

### Female Names
- Akosua
- Adwoa
- Abenaa
- Akua
- Yaa
- Afua
- Ama

## Validation Rules
- Day must be between 1–31
- Month must be between 1–12
- Gender must be selected

## Author
Mwangi Michael
Created as a JavaScript learning project for practicing:
- Arrays
- Conditional logic
- Form handling