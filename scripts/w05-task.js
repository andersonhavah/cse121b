/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable named templesElement that references the HTML div element
const templesElement = document.querySelector('#temples');

// Declare a global empty array variable to store a list of temples
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    // Iterate over each temple in the temples array
    temples.forEach(temple => {
        // Create an HTML <article> element
        const articleElement = document.createElement("article");

        // Create an HTML <h3> element and add the temple's templeName property
        const headingElement = document.createElement("h3");
        headingElement.textContent = temple.templeName;

        // Create an HTML <img> element and add the temple's src and alt attributes
        const imageElement = document.createElement("img");
        imageElement.setAttribute('src', temple.imageUrl);
        imageElement.setAttribute('alt', temple.location);

        // Append the <h3> element and the <img> element to the <article> element as children.
        articleElement.appendChild(headingElement);
        articleElement.appendChild(imageElement);

        // Append the <article> element to the global templesElement variable
        templesElement.appendChild(articleElement);

    });
    
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Check to see if the fetch was successful
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }

};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.querySelector('#filtered').value;

    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { 
    filterTemples(templeList); 
});

// Call getTemples to start fetching and displaying the data
getTemples();
