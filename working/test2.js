const person = {
    name: "John Doe",
    yearOfBirth: 1987,
    pet: "dog"
}

console.log(person.yearOfBirth);
console.log(person["yearOfBirth"]);

for (const key in person) {
        console.log(person[key]);  
    }

const a = 'hello';
a = 'bye';
console.log(a);