"use strict";
// Question 2
/*
let personName : string = "Eric";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);
 */
// let personName = "Eric";
// console.log(`Hello ${personName}, would you like to learn some python today?`);
// Question 3
// let personName : string = "Kamran";
// let personName : string = "Kamran";
// // in lowerCase
// console.log(personName.toLowerCase());personName.toLowerCase();
// console.log(personName.toLowerCase());
// // in UpperCase
// console.log(personName.toUpperCase());
// console.log(personName.toUpperCase());
// // in titlCasse
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1,2).toLowerCase() + personName.charAt(2).toUpperCase() + personName.slice(3,4).toLowerCase() + personName.charAt(4).toUpperCase() + personName.slice(5,6).toLowerCase());
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1,6).toLowerCase());
// Question 4
// console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);
// console.log(`Albert Einstein once said, "A person who never made a mistak never tried anthing new.`);
// // Question 5
// let famous_person : string = "Albert Einstein";
// // console.log(`${famous_person} once said, "A person who never made a mistake  never tried anything new." `)
// console.log(`${famous_person}, once said, "A person who never made a mistake never tried anything new."`);
// Question 6 
// let personName: string = "\t\n Kamarn \t\n"
// // console.log(personName);
// // console.log(personName.trim());
// console.log(personName);
// console.log(personName.trim());
// Question 7 
// let addition : number = 4 + 4;
// console.log(addition);
// let subtraction : number = 16 - 8;
// console.log(subtraction);
// let multiplication : number = 4 * 2;
// console.log(multiplication);
// let division : number = 32 / 4;
// console.log(division);
// Question 8
// console.log(4 + 4);
// console.log(12 - 4);
// console.log(2 * 4);
// console.log(32 / 4);
// Question 9
// let myFavoriteNumvber = 9;
// let message = (`My favorite number is ${myFavoriteNumvber}.`);
// console.log(message);
// Question 10
// Kamran 2024-5-11
// let myName = "Kamran";
// // console.log(`Hello ${myName}, would you like to learn some typescript today?`);
// console.log(`HELLO ${myName}, would you like to learn some Typescript today?`);
// Question 11
// let names : string [] = ["Ali", "Asad", "Jamshed"];
// // // console.log(names);
// // for  (let i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }
// // for (let name of names) {
// //     console.log(name);
// // }
// console.log(names);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
// // Question 12
// let names : string [] = ["Ali", "Asad", "Jamshed"];
// // for (let name of names) {
// //     console.log(`Hello ${name}, would you like to learn Typescript today?`);
// // };
// for (let name of names) {
//     console.log(`Hello ${name}, would you like to learn Typescript today?`);
// }
// Question 13
// let transports: string[] = ["Honda Bike", "Audi", "Mehran"];
// // transports.forEach(transport => {
// //     console.log(`I would like to my own ${transport}.`);
// // });
// transports.forEach(transport => {
//     console.log(`I would like to my own ${transport}.`);
// })
// for (let transport of transports) {
//     console.log(`I would like to my own ${transport}`);
// }
// Question 14
// let guests: string[] = ["Ali", "Asad", "Jamshed"];
// // guests.forEach(guest => {
// //     console.log(`Dear ${guest}, would you like to join me for dinner.`);
// // });
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner.`);
// })
// Questioin 15
let guests = ["Ali", "Asad", "Jamshed"];
// let canNotAttend = "Ali";
// console.log(`${canNotAttend}, can't make it to dinner.`)
// let newGuest = "Imran";
// guests[guests.indexOf(canNotAttend)] = newGuest;
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`)
// });
let canNotAttend = "Ali";
console.log(`${canNotAttend} can't make in to dinner.`);
let newGuest = "Imran";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner.`);
});
// let guests : string[] = ["Ali", "Asad", "Jamshed"];
// let canNotAttend = "Ali";
// console.log(`${canNotAttend}, can't make it to dinner.`);
// let newGuest = "Imran";
// guests[guests.indexOf(canNotAttend)] = newGuest;
// guests.forEach(guest => {
//     console.log(` Dear ${guest}, would you like to join me for dinner?`)
// })
// let guests: string[] = ["Ali", "Asad", "Jamshed"];
// let canNotAttend = "Ali";
// console.log(`${canNotAttend}, can't make it to dinner.`);
// let newGuest = "Imran";
// guests[guests.indexOf(canNotAttend)] = newGuest;
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner? `)
// })
// Question 16
// let guests: string[] = ["Ali", "Asad", "Jamshed"];
// console.log("Great news! I found a bigger dinner table!");
// guests.unshift("Imran");
// guests.push("Kamran");
// guests.splice(guests.length / 2, 0, "Farhan");
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`)
// });
// Question 17
// let guests: string[] = ["Ali", "Asad", "Jamshed"];
// console.log("unfortunately");
// while (guests.length > 2) {
//     let removerGuest = guests.pop();
//     console.log(`Sorry, ${removerGuest}, you're not invited to dinner.`)
// }
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner.`);
// });
// guests.splice(0, guests.length);
// console.log(guests);
// Question 18
// let places: string[] = ["Karachi", "Islamabad", "Lahore", "Multan", "Sawat"];
// console.log("Original Order:", places);
// console.log("Alphabetical order:", [...places].sort());
// console.log("Original Order:", places);
// console.log("Reverse Alphabetical Order:", [...places].sort().reverse());
// console.log("Original Order:", places);
// places.reverse();
// console.log("Reverse Order:", places);
// places.reverse();
// console.log("Original Order:", places);
// places.sort();
// console.log("Alphabetical Order:", places);
// places.reverse();
// console.log("Reverse alphabetical Order:", places);
// // Question 19
// let guests: string[] = ["Ali", "Asad", "Jamshed"];
// console.log(`I am inviting ${guests.length} people to dinner.`)
// Question 20
// let countries: string[] = ["Pakistan", "Japan", "Turkey", "Saudi"];
// console.log("Countries I'd like to visit:", countries)
//  Question 21
// let book: {
//     title: string;
//     author: string;
//     yearPublished: number
// } = {
//     title:"The Hobbit",
//     author: "J.R.R. Tolkien",
//     yearPublished: 1937
// };
// console.log(`Book info: ${book.title} by ${book.author}, published in ${book.yearPublished}.`);
// let person: {name: string; fName: string; age: number} = {
//     name: "Kamran",
//     fName: "Abdul Qayum",
//     age: 17,
// };
// console.log(`Person Info: My name is ${person.name}. My father Name is ${person.fName} & my age is ${person.age}.`)
// // Question 22
// let fruits: string[] = ["Apple", "Banana", "Mango"];
// // console.log(fruits[3]);
// fruits[2] = "Mango"
// console.log(fruits[2])
// Question 23
// Qusetion 24
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True
// // Numerical tests
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False
// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// // Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True
// // Test whether an item is not in a array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True
// Question 25
// let alien_Color : string = "green";
// if (alien_Color == "green") {
//     console.log("You just earned 5 points!");
// }
// alien_Color = "red";
// if (alien_Color === "yellow") {
//     // No out put because the condition is false
// }
// Question 26
// let alien_Color : string = "Yellow";
// if (alien_Color == "Yellow") {
//     console.log("You just earned 5 points!")
// } else {
//     console.log("You just earned 10 points!")
// }
// alien_Color = "green";
// if (alien_Color == "red") {
//     console.log("You just earned 5 points!")
// } else {
//      console.log("You just earned 10 points!")
// }
// Question 27
// // Green alien version:
// let alien_color = "green";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
// // Yellow alien version: 
// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
// // Red alien version:
// alien_color = "red";
// if (alien_color == "green") {
//     console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//     console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//     console.log("You earned 15 points.");
// }
// Question 28
// let age: number = 17;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age < 4) {
//     console.log("The person is a toddler.");
// } else if (age < 13) {
//     console.log("The person is a kid.");
// } else if (age < 20) {
//     console.log("The person is a teenager.");
// } else if (age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Question 29
// Question 30
// let usernames: string[] = ["Admin", "Ali", "Asad", "Jamshed", "Imran"];
// usernames.forEach(username => {
//     if (username === "Admin") {
//         console.log("Hello Admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for loging again.`);
//     }
// });
// Question 31
// let usernames : string [] = [] ;
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     console.log(`Hello ${usernames}, would you like to learn some python today?`)
// };
// Question 32
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
// // Question 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1 ) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });
// Question 34
// let pizzas : string[] = ["pepperoni", "margherrita","hawaiian"];
// pizzas.forEach(pizza => {
// console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");
// // Question 35
// let animals : string [] = ["Dog", "Cat", "Rabbit"];
// animals.forEach(animal => {
//     console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");
// Question 36
// function make_shirt(size: string, message: string) {
//     console.log(`Making a ${size} t-shirt with the mesage "${message}" printed on it.`)
// }
// make_shirt("medium", "Code is life");
// Question 37
// function make_shirt(size: string = "large", mesage: string = "I love Typescript") {
//     console.log(`Making ${size} t-shirt with the message "${mesage}" printed on it.`);
// }
// make_shirt();
// make_shirt("medium");
// make_shirt("small",  "Dive into Coding");
// Question 38
// function describe_city(city : string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karanchi");
// describe_city("Islamabad");
// describe_city("Tokyo" , "Japan");
// Question 39
// function city_country(city: string , country: string) : string {
//     return `${city}, ${country}`;
// }
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Paris", "France"));
// Question 40
// function make_album(artist: string , title: string, tracks?: number) {
//     let album = { artist , title };
//     if (tracks) {
//         album[tracks]  = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist One", "The First Albem"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
// Question 41
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//     magicians.forEach((magician) => {
//         console.log(magician);
// })
// }
// show_magicians(magicians)
// Question 42
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// // function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
// Question 43
// let magicians: string[] = ["Alice", "David", "Chris"];
// function make_great(magicians: string[]): string[] {
//   let greatMagicians: string[] = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names
// function show_magicians(magicians: string[]) {
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   };
// Question 44
// function make_sandwich(...items: string[]) {
//     console.log(`Making a sandwich with ${items.join(', ')}.`);
// }
// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "Lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");
// // Question 45
// function make_car(manufacturer: string, model: string, ...options: [string, any][]) {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]))
// let randomNumber = Math.floor(Math.random() *5 + 1);
// console.log(randomNumber);
