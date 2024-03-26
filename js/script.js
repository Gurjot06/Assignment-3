document.addEventListener('DOMContentLoaded', function() {
    // Dynamically adding student info
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerText = "Student ID: 200555982 | Name: Gurjot Singh";

    // Form submission
    const form = document.getElementById('pizza-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);
        const pop = document.getElementById('pop').value;
        
        const pizza = new Pizza(size, crust, toppings,pop);
        displayPizzaDescription(pizza);
    });
});

// Pizza Class
class Pizza {
    constructor(size, crust, toppings,pops) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.pop = pops;
    }
}

// Display Pizza Description
function displayPizzaDescription(pizza) {
    // Create container for description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    // Create description paragraph
    const description = document.createElement('p');
    description.innerHTML = `You ordered a ${pizza.size} pizza with ${pizza.crust} crust and the following toppings: ${pizza.toppings.join(', ')} with a ${pizza.pop} .`;

    // Append description to container
    descriptionContainer.appendChild(description);

    // Append container to body
    document.body.appendChild(descriptionContainer);
}

