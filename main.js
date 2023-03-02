"use strict"

function renderCoffee(coffee) { // this function pulls from the array and wraps it in a div and assign name the header element and roast the p element
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
//
//
//
function renderCoffees(coffees) { // this function loops html through nesting it in a parent div with a column and a conditional making 3 coffees group up inside the div.
    var html = '<div class="col-lg-6 col-md-6 col-sm-6"><!-- start of loop-->'; // start of loop
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
        if (i % 3 == 2) {
            html += "</div><div class='col-lg-6 col-md-6 col-sm-6'>";
        }
         //html += renderCoffees (coffees[i]);

    }
    html += '</div><!--end of loop-->'; // end of loop

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
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');

tbody.innerHTML = renderCoffees(coffees);

coffeeSearch.addEventListener('keyup', coffeeName); // keydown makes it delay the change this is more abrupt.
roastSelection.addEventListener('change', updateCoffees);



// submitButton.addEventListener('click', function(e) {
//     updateCoffees(e);
//     coffeeName(e);
// });


