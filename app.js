// program no: 1
let number1 = prompt("Enter any number");
let number2 = prompt("Enter any number");
if (number1 > number2) 
    console.log("Larger number is:%d",number1);
else if (number1 < number2) 
    console.log("Larger number is:%d",number2);
// program no: 2
let number = prompt("Enter any number")
if (number >= "1" && number <="9") 
   console.log("The sign is +");
else if (number >= "-1" && number <= "-9") 
   console.log("The sign is -");
// program no: 3
let num1 = prompt("Enter any number")
let num2 = prompt("Enter any number")
let num3 = prompt("Enter any number")
let num4 = prompt("Enter any number")
let num5 = prompt("Enter any number")
if (num1>num2 && num1>num3 && num1>num4 && num1>num5) 
    {console.log("The largest number is: %d",num1);}

else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) 
    {console.log("The largest number is: %d",num2);}

else if (num3>num1 && num3>num2 && num3>num4 && num3>num5) 
    {console.log("The largest number is: %d",num3);}

else if (num4>num1 && num4>num2 && num4>num3 && num4>num5) 
    {console.log("The largest number is: %d",num4);}

else if (num5>num1 && num5>num2 && num5>num3 && num5>num4) 
  {  console.log("The largest number is: %d",num5);}
// program no: 4
for (let index = 1; index <=15; index++) {
    if (index % 2 === 0) {
        document.write(index +" is Even ")
        }
    else
      {document.write(index +" is Odd ")}
}
// program no: 5
let Totalnumber = +prompt ("Enter your number") ;
if (Totalnumber > "90" )
   console.log("Grade A");
else if (Totalnumber > "80" )
   console.log("Grade B");
else if (Totalnumber > "70" )
   console.log("Grade C");
else if (Totalnumber > "60" )
   console.log("Grade D");
else if (Totalnumber < "60" )
   console.log("Grade F");
// program no: 6
let index = +prompt("Enter number between 1 to 100")
{
 if (index % 3 == 0 && index % 5 == 0) {
      console.log("fizzBuzz");
     }
 else if (index % 3 == 0) {
   console.log("Fizz");
  }
  else if (index % 5 == 0) {
   console.log("Buzz");
  }
}
// program no: 7
for (let index = 1; index < 2; index++) {
  console.log("*");
  for (let index = 1; index < 3; index++) {
   console.log("**");
   }
   for (let index = 1; index < 3; index++) {
      console.log("***");
      }
      for (let index = 1; index < 3; index++) {
         console.log("****");
         }
         for (let index = 1; index < 3; index++) {
            console.log("*****");
            }
}
