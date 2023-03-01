"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '<div class="col-lg-3 col-md-4 col-sm-6">';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
        if (i % 3 == 2) {
            html += "</div><div class='col-lg-4 col-md-3 col-sm-6'>";
        }
        html += renderCoffees (coffees[i]);

    }
    html += '</div>';

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    //
    //

    //

    if (selectedRoast === 'All') { // displays all roast types
        filteredCoffees = coffees;
    } else {
        //

        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });

        tbody.innerHTML = renderCoffees(filteredCoffees);

    }
}

function coffeeName(e) {
    //e.preventDefault();
    var selectedName = coffeeSearch.value.toLowerCase();
    var filteredCoffeesName = [];
    //
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(selectedName)) {
            filteredCoffeesName.push(coffee);
        }
    });
     tbody.innerHTML = renderCoffees(filteredCoffeesName);
}


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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');



var coffeeSearch = document.querySelector('#coffee-search');


tbody.innerHTML = renderCoffees(coffees);


coffeeSearch.addEventListener('keydown', coffeeName);
submitButton.addEventListener('click', updateCoffees);



// submitButton.addEventListener('click', function(e) {
//     updateCoffees(e);
//     coffeeName(e);
// });


