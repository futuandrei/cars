'use strict';

const addCarForm = document.querySelector('#addCar'); //selecting addCar form id
const searchCarForm = document.querySelector('#searchCar'); //selecting searchCar form id

const cars = []; // empty array to store cars in

// car object to create new car
class Car {
    constructor(license, maker, model, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = parseFloat(price);
        this.color = color;
    }
}

// --- ?
const addCar = (e) => {
    e.preventDefault();
    // get values from the form
    const license = document.querySelector('#license').value.trim();
    const maker = document.querySelector('#maker').value.trim();
    const model = document.querySelector('#model').value.trim();
    const owner = document.querySelector('#owner').value.trim();
    const price = document.querySelector('#price').value.trim();
    const color = document.querySelector('#color').value;
    // create new car by calling Car object 
    const newCar = new Car(license, maker, model, owner, price, color);
    
    addCarForm.reset(); // -- ?

    cars.push(newCar) // Add new car to cars array
    displayTable(); // call displayTable function
}

const displayTable = () => {
    // get table
    const table = document.querySelector('#carsTable');
    // --- ?
    table.innerHTML = table.rows[0].innerHTML;
    // loop through cars array
    cars.forEach(car => {
        const row = table.insertRow(-1); // inserting row to the table
        // --- ?
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1); // inserting cell to the table
            cell.textContent = text;
        })
    })
}

// Function to search cars
const searchCar = (e) => {
    e.preventDefault(); // -- ?
    // Getting search input
    const searchInput = document.querySelector('#search').value;
    // Variable with true/false returned value if car is found from the array cars. Each car is changed to lowercase
    const foundCar = cars.find(car => car.license.toLowerCase() === searchInput.toLowerCase());
    // Getting search result <p> element to display result there
    const searchResult = document.querySelector('#searchResult');
    // checking if foundCar is true/false
    if (foundCar) {
        // if the car is found, search result <p id="searchResult"> is assigned with received values.
        searchResult.innerHTML = `
          <p>Maker: ${foundCar.maker}</p>
          <p>Model: ${foundCar.model}</p>
          <p>Owner: ${foundCar.owner}</p>
          <p>Price: ${foundCar.price.toFixed(2)}€</p>
        `;
        // if car is not found, <p id="searchResult"> is updated
    } else {
        searchResult.innerHTML = '<p>No car found with the given license plate.</p>';
    }
}
// Event listener for submit button to add car (calls addCar function)
addCarForm.addEventListener('submit', addCar);
// Event listener for submit button to search car (calls searchCar function)
searchCarForm.addEventListener('submit', searchCar);
