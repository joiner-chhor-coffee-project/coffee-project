"use strict"

function renderCoffee(coffee) { // this function pulls from the array and wraps it in a div and assign name the header element and roast the p element
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<a class="coffee-link" href="#"><h3>' + coffee.name + '</h3></a>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
//
//
//



function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//
//
//
function updateCoffees(e) { // function for roast drop down.
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'All') { // displays all roast types
        filteredCoffees = coffees;
        tbody.innerHTML = renderCoffees(coffees); // this fixes the all option making it where the var 'tbody.innerHTML' calls on '#coffee' and makes it equal its original value to bring back the whole list.
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}
//
//
//


function coffeeName(e) { // function for searching for a coffee
    //e.preventDefault();
    var selectedName = coffeeSearch.value.toLowerCase(); // change coffee search input to lowercase
    var filteredCoffees = [];

    if (roastSelection.value === 'All') { // this checks if roast is set to all if it is all coffees are filtered
        filteredCoffees = coffees;
    } else {
        //using the filter method we creat a new array of coffee that matches the active roast and stores it inside filteredCoffees array.
        filteredCoffees = coffees.filter(function (coffee) {
            return coffee.roast === roastSelection.value;
        });
    }

    //filters to create another new array of coffees matching the selected name.
     var filteredCoffeesName = filteredCoffees.filter(function (coffee) {
            return coffee.name.toLowerCase().includes(selectedName);
     });
    // adds the coffee to the table that was chosen.
    tbody.innerHTML = renderCoffees(filteredCoffeesName);
}
//
//
//below is function to add new coffee

function addCoffee(e) {
    e.preventDefault();
    var addCoffeeName = addCoffeeSearch.value
    var addCoffeeRoast = document.querySelector('#add-roast-selection').value;
    var addedCoffee = {
        id: coffees.length + 1,
        name: addCoffeeName,
        roast: addCoffeeRoast,
    };

    coffees.push(addedCoffee);
    localStorage.setItem('coffeesUpdated', JSON.stringify(coffees))

    var myCoffee = localStorage.getItem("myCoffee");
    document.querySelector("#add-roast-selection").value

    tbody.innerHTML = renderCoffees(coffees);
}







//
// var data = localStorage.getItem("data");
// var myCoffeeAdd = data ? JSON.parse(data) : [];
//
// document.querySelector('#add-submit').addEventListener('click', createCoffee);
//
//
//
// function createCoffee() {
//
//     let name = document.querySelector('#coffee').value;
//     let coffeeName = new addCoffee(name.value);
//     myCoffeeAdd.push(coffeeName);
//     localStorage.setItem('data', JSON.stringify(myCoffeeAdd));
// }








function mySave() {
    var addCoffeeName = document.querySelector('#add-coffee-search').value;
    // localStorage.setItem("myContent", addCoffeeName);
}
function myLoad() {
    var updatedCoffees = localStorage.getItem("coffeesUpdated");
    renderCoffees(updatedCoffees)
    // let newCoffee = localStorage.getItem(updatedCoffees);
    updatedCoffees.push(coffees);

}






//above is function to add new coffee
//
//
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
//
//
//
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#add-submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var addCoffeeSearch = document.querySelector("#add-coffee-search");
var addRoastSelection = document.querySelector("#add-roast-selection");
var addName = document.querySelector('#add-coffee-search');
var addRoast = document.querySelector('#add-roast-selection');



tbody.innerHTML = renderCoffees(coffees);

coffeeSearch.addEventListener('keyup', coffeeName); // keydown makes it delay the change this is more abrupt.
roastSelection.addEventListener('change', updateCoffees);

 //addName.addEventListener('keyup', addCoffee);
// addRoast.addEventListener('click', addCoffee);
submitButton.addEventListener('click', addCoffee);


submitButton.addEventListener('click', mySave);



window.addEventListener('load', function() {
    myLoad();
});

// submitButton.addEventListener('click', function(e) {
//     updateCoffees(e);
//     coffeeName(e);
// });


