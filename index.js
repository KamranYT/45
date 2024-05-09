"use strict";
// Assignment Solution
// Question 2
/*
let personName: string = 'Kamran';
console.log(`Hello ${personName} would you like to learn some python today?`);
                                                                                */
// Question 3 
/*
let personName: string = 'Kamran';

// in lowercase
console.log(personName.toLowerCase());

// in Uppercase
console.log(personName.toUpperCase());

// in titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
                                                                                       */
// Question 4
/*
let quote:string = "A person who never made a mistake never tried anything new.";
let auther:string = "Albert Einstein";

console.log(`${auther} once said, "${quote}"`);
                                                  */
// Question 5
/*
let quote: string = "A person who never made a mistake never tried anything new."
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;

console.log(message);
                     */
// Question 6
/*
let personName: string = "\t\n Kamran \t\n";
console.log(personName);
console.log(personName.trim());
                            */
// Question 7
/*
let addition = 7 + 1;
let subtraction = 16 - 8;
let multiplication = 4 * 2;
let division = 32 / 4;
 
console.log(addition,subtraction,multiplication,division);
                                                            */
// Question 8 
/*
console.log(7 + 1);
console.log(16 - 8);
console.log(4 * 2);
console.log(32 / 4);
                        */
// Question 9 
/*
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);
                                                           */
// Question 10
/*
// Kamran, 2024-05-04
let myName: string = "Kamran";
console.log(`Hello ${myName}, would you like to learn some Typescript today?`);
                                                                                   */
// Question 11
/*
let names: string [] = ["Jamshed" , "Ali" , "Asad"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
   */
// Question 12
/*
let names: string [] = ["Jamshed" , "Ali" , "Asad"];

let message: string = " Do you like to play football?"
console.log(names[0] + message )
console.log(names[1] + message )
console.log(names[2] + message )
                                      */
// Question 13 
/*
let transportation : string [] = ["Hoda Motorcycle" , "Audi" , "BMW"];
transportation.forEach(transportation => {
    console.log(`I would like to own a ${transportation}.`);
});
       */
// Question 14 
/*
let guestArr : string [] = ["Ali" , "Jamshed" , "Asad"];
guestArr.forEach(guestArr => {
     console.log(`Dear ${guestArr}, would you like to join me for dinner?`);
});
      */
// Question 15
/*
let guests: string [] = ["Ali" , "Jamshed" , "Hassan"];
let canNotAttend = "Ali";
console.log(`${canNotAttend} can't make it to dinner.`);

let newGuest = "Imran";
guests[guests.indexOf(canNotAttend)] = newGuest;

guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
    */
// Question 16
/*
let guests: string [] = ["Ali","Asad","Jamshed"];
console.log("Great news! I found a bigger dinner table!");

guests.unshift("Kaleem");
guests.splice(guests.length / 2, 0, "Ahmed");
guests.push("Farhan");

guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
*/
// Question 17
/*
let guests: string [] = ["Ali","Asad","Jamshed","Kaleem","Ahmed"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2){
    let  remvedGuests = guests.pop();
    console.log(`Sorry, ${remvedGuests}, I can't invite you to dinner.`);
}
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
                     */
// Question 18
/*
let places: string [] = ["Usa","Japan","Itlay","England","Chine"];

console.log("Original order:", places);

console.log("Alphabetical order:",[...places].sort());

console.log("Original order:", places);

console.log("Reverse aplphabetical order:",
    [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
                                                     */
// Question 19
/*
let guests: string[] = ["Ali","Asad","Hassan","Jamshed"];
console.log(`I am inviting ${guests.length} people to dinner.`);
                                                                     */
// Question 20
/*
let mountains: string [] = ["K2","Karakoram","Kirthur","Hindu Kush","Broad Peak"];
console.log("list of mountains",mountains);
                                              */
// Question 21
/*
let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);
                                                                                                */
// Question 22
/*
let days : string [] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// console.log(days{7}) // Error declared:
console.log(days[6])
                     */
// Question 23
/*
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // False

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

console.log("Is car == 'subaru'? && car.length == 6? I predict true.");
console.log(car === 'subaru' && car.length == 6); // True

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

console.log("Is 10 >= 20? I predict false")
console.log(10 >= 20); // False

console.log("Is 7 <= 10? I predict True.");
console.log(7 <= 10); // True

console.log

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
                                                                                                                */
// Question 24
// Question 25
/*
let alien_color : string = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
  */
// Question 26
/*
let alien_color : string = "green";
if (alien_color == "green") {
    console.log("You earned 5 points for shooting the alien!")
} else {
    console.log("You earned 10 points.")
};
 */
// Question 27
/*
// green
let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

// red
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

// yellow
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
*/
// Question 28
/*
let age: number = 17;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
  */
/*
// Question 29

let favorite_fruits: string[] = ["apples", "bananas", "mango", "orange"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!");
};
   */
// Question 30
// let userName : string [] = ["admin", "ali", "ahmed", "jamshed"];
// userName.forEach(userName => { 
//     if (userName === "admin") { 
//         console.log("Hello admin, would you like to see a status report?");
//     } else  {
//         console.log(`Hello ${userName} thank you for logging again. `)
//     }
// });
/*
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
*/
// Question 31 
/*
let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Greet users
};
   */
// Question 32
/*
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
    */
// Question 33
/*
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
    */
// Question 34 
/*
let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
                                          */
// Question 35
let animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// Question 36
/*
function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");
                                      */
// Question 37
/*
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
                                                                        */
// Question 38
/*
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
                                 */
// Question 39
/*
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
                                             */
// Question 40
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//       album["tracks"] = tracks;
//     }
//     return album;
//   }
//   console.log(make_album("Artist One", "The First Album"));
//   console.log(make_album("Artist Two", "The Second Album"));
//   console.log(make_album("Artist Three", "The Third Album", 12));
// Question 41
/*
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
                           */
// Question 42
/*
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}
  
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
                                                     */
// // Question 43
/*
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
});
return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  };
    */
// Question 44
/*
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
                                                         */
// Question 45
// function make_car(manufacturer: string, model: string, ...options: [string, any][]) {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
