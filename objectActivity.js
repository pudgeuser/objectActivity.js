// objectActivity.js

// Create an object called car
const car = {
    type: "Sedan",
    model: "Camry",
    color: "Blue"
};

// Use typeof to check the type of the object and log it to the console
console.log(typeof car); // "object"

// Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log(car); // { type: "Toyota", model: "Camry", color: "Blue" }

// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log(car); // { type: "Toyota", model: "Camry", color: "Blue", wheels: 4 }
