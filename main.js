"use strict"

function renderCoffee(coffee) { // this function pulls from the array and wraps it in a div and assign name the header element and roast the p element
    var html = '<div class="coffee">';
    html += '<a class="coffee-link" id="coffee-' + coffee.id + '" href="#"><h3>' + coffee.name + '</h3></a>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//
//
//

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
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
        filteredCoffees = coffees.reverse();
        console.log(filteredCoffees);
        console.log(coffees);
        tbody.innerHTML = renderCoffees(coffees.reverse()); // this fixes the all option making it where the var 'tbody.innerHTML' calls on '#coffee' and makes it equal its original value to bring back the whole list.
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
function coffeeName() { // function for searching for a coffee
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
    var addCoffeeName = addCoffeeSearch.value;// input field put into a var
    var addCoffeeRoast = addRoastSelection.value;// select option value put into a var
    var addedCoffee = {
        id: coffees.length + 1,
        name: addCoffeeName,
        roast: addCoffeeRoast,
    };
    if (addCoffeeName.length > 3) {
        coffees.unshift(addedCoffee);
        localStorage.setItem('loadCoffees', JSON.stringify(coffees));
        tbody.innerHTML = renderCoffees(coffees);
        alert("OH NO. Sorry we dont have that coffee at this time but we will put in an order for it now. Thank you for bringing it to our attention. It is now added to our display.")
        addCoffeeSearch.value = '';
        // clears the search box when refreshing page.
        location.reload();// reloads the page after function auto doing myLoad and fixing my issue of after making a coffee the other coffee links didnt work until refresh.
    } else {
        alert('Sorry this has to be more than three character long to be valid.')
    }
}

function myLoad() {
    var loadedCoffees = localStorage.getItem('loadCoffees');
    if (loadedCoffees) {  // If 'loadedCoffees' is truthy
        coffees = JSON.parse(loadedCoffees);  // Puts the array back together from stringify
        tbody.innerHTML = renderCoffees(coffees);
    }
}

//
//
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {
        id: 1,
        name: 'Light City',
        roast: 'light',
        description: 'LightCity coffee is a light roast blend of elegant flavors consisting of bold and citrus fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 2,
        name: 'Half City',
        roast: 'light',
        description: 'Half City coffee is a light roast blend of elegant flavors consisting of bold and cidar fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 3,
        name: 'Cinnamon',
        roast: 'light',
        description: 'Cinnamon coffee is a light roast blend of elegant flavors consisting of bold and cinnamon fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 4,
        name: 'City',
        roast: 'medium',
        description: 'City coffee is a medium roast blend of elegant flavors consisting of bold and hickory fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 5,
        name: 'American',
        roast: 'medium',
        description: 'American coffee is a medium roast blend of elegant flavors consisting of bold and zesty fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 6,
        name: 'Breakfast',
        roast: 'medium',
        description: 'Breakfast coffee is a medium roast blend of elegant flavors consisting of bold and bright fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 7,
        name: 'High',
        roast: 'dark',
        description: 'High coffee is a dark roast blend of elegant flavors consisting of bold and apple fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 8,
        name: 'Continental',
        roast: 'dark',
        description: 'Continental coffee is a dark roast blend of elegant flavors consisting of bold and honey fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 9,
        name: 'New Orleans',
        roast: 'dark',
        description: 'New Orleans coffee is a dark roast blend of elegant flavors consisting of bold and cajun fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 10,
        name: 'European',
        roast: 'dark',
        description: 'European coffee is a dark roast blend of elegant flavors consisting of bold and bland fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 11,
        name: 'Espresso',
        roast: 'dark',
        description: 'Espresso coffee is a dark roast blend of elegant flavors consisting of bold and strong fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 12,
        name: 'Viennese',
        roast: 'dark',
        description: 'Viennese coffee is a dark roast blend of elegant flavors consisting of bold and sweet fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 13,
        name: 'Italian',
        roast: 'dark',
        description: 'Italian coffee is a dark roast blend of elegant flavors consisting of bold and hearty fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
    {
        id: 14,
        name: 'French',
        roast: 'dark',
        description: 'French coffee is a dark roast blend of elegant flavors consisting of bold and romantic fusion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi quis commodo odio aenean. Etiam dignissim diam quis enim. Proin fermentum leo vel orci porta non pulvinar neque.'
    },
];
console.log(coffees.reverse());
//
//
//
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#add-submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var addCoffeeSearch = document.querySelector("#add-coffee-search");
var addRoastSelection = document.querySelector("#add-roast-selection");

tbody.innerHTML = renderCoffees(coffees);

coffeeSearch.addEventListener('keyup', coffeeName); // keydown makes it delay the change this is more abrupt.
roastSelection.addEventListener('change', updateCoffees);

submitButton.addEventListener('click', addCoffee);

window.addEventListener('load', function () {
    myLoad();
//
//
//below is for about section translate
    document.getElementById('btn-1').addEventListener('click', changeText);

    function changeText() {
        let swapText = document.getElementsByClassName("about-content")[0];
        if (swapText.lightSwitch === true) {
            swapText.lightSwitch = false;
            swapText.innerHTML = "Bad coffee is so bad that it's so terrible, but I guess its better than no coffee at all. But the coffee is really bad, unless I don't have any coffee I guess it's good.";
        } else {
            swapText.lightSwitch = true;
            swapText.innerHTML = "Malum capulus tam malum est quod tam atrox, Sed ego coniecturam eius meliorem quam nullum omnino capulus. Sed capulus vere malum est, nisi nullum habeo capulus i coniecto bonum esse.";
        }
    }

    //
    //
    //
    // below is for the roast survey
    var roastSurveyButton = document.querySelector('#survey-submit');
    roastSurveyButton.addEventListener('click', roastSurveySwitch);


    function roastSurveySwitch(e) {
        e.preventDefault();
        var roastSurvey = document.querySelector('.roast-dom:checked');
        var placeholderNames = document.getElementsByClassName("swap-img");

        var surveyRoast = roastSurvey.value;
        console.log(roastSurvey);
        console.log(surveyRoast + "inside function");
        for (var i = 0; i < placeholderNames.length; i++) {
            switch (surveyRoast) {
                case 'light' :
                    console.log(surveyRoast + "inside light");
                    placeholderNames[i].src = "./img/light-roast.png";
                    break;
                case 'medium' :
                    console.log(surveyRoast + "inside medium");
                    placeholderNames[i].src = "./img/medium-roast.jpeg";
                    break;
                case 'dark' :
                    console.log(surveyRoast + "inside dark");
                    placeholderNames[i].src = "./img/dark-roast.png";
                    break;

            }
        }
    }

    //
    //
    //
    // below is for the coffee name description

    var lightCity = document.querySelector('#coffee-1');
    var halfCity = document.querySelector('#coffee-2');
    var cinnamon = document.querySelector('#coffee-3');
    var city = document.querySelector('#coffee-4');
    var american = document.querySelector('#coffee-5');
    var breakfast = document.querySelector('#coffee-6');
    var high = document.querySelector('#coffee-7');
    var continental = document.querySelector('#coffee-8');
    var newOrleans = document.querySelector('#coffee-9');
    var european = document.querySelector('#coffee-10');
    var espresso = document.querySelector('#coffee-11');
    var viennese = document.querySelector('#coffee-12');
    var italian = document.querySelector('#coffee-13');
    var french = document.querySelector('#coffee-14');


    lightCity.addEventListener('click', lightCityDesc);
    halfCity.addEventListener('click', halfCityDesc);
    cinnamon.addEventListener('click', cinnamonDesc);
    city.addEventListener('click', cityDesc);
    american.addEventListener('click', americanDesc);
    breakfast.addEventListener('click', breakfastDesc);
    high.addEventListener('click', highDesc);
    continental.addEventListener('click', continentalDesc);
    newOrleans.addEventListener('click', newOrleansDesc);
    european.addEventListener('click', europeanDesc);
    espresso.addEventListener('click', espressoDesc);
    viennese.addEventListener('click', vienneseDesc);
    italian.addEventListener('click', italianDesc);
    french.addEventListener('click', frenchDesc);


    var divChange = document.getElementsByClassName('coffee');
    var divchangeTwo = document.getElementsByClassName('js-target');

    var htmlAdd = document.getElementById('coffees');


    var backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', refreshPage);

    function refreshPage() {
        console.log('Refreshing page...');
        location.reload();
    }

    function lightCityDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 1) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');

        }
    }

    function halfCityDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 2) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function cinnamonDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 3) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }


    function cityDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 4) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }


    function americanDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 5) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function breakfastDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 6) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function highDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 7) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function continentalDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 8) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function newOrleansDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 9) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function europeanDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 10) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function espressoDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 11) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function vienneseDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 12) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function italianDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 13) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }

    function frenchDesc() {
        for (var i = 0; i < coffees.length; i++) {
            if (coffees[i].id === 14) {
                htmlAdd.innerHTML += "<h2 class='classAddTitle'>" + coffees[i].name + "</h2>";
                htmlAdd.innerHTML += "<p class='classAddDesc'>" + coffees[i].description + "</p>";
            }
        }
        for (var d = 0; d < divChange.length; d++) {
            divChange[d].style.display = 'none';
        }
        for (var j = 0; j < divChange.length; j++) {
            divchangeTwo[j].style.display = 'none';
            backButton.classList.remove('d-none');
        }
    }
});




