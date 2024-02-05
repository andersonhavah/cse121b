/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Anderson Havah",
    photo: "images/andersonPicture.png",
    favoriteFoods: ['French Fries', 'Avocado', 'Attieke', 'Chicken', 'Steak', 'Fried Yams', 'Fried Rice', 'Akoume'],
    hobbies: ['Beach', 'Movies', 'Tv Shows', 'Tennis', 'Swimming', 'Music'],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Accra, Ghana',
        length: '3 months'
    },
    {
        place: "Niamey, Niger",
        length: "6 months"
    },
    {
        place: "Gbenyedzi, Lome",
        length: "3 years"
    },
    {
        place: "Be, Lome",
        length: "2 months"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach( food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach( hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

// Iterate through each object in the placesLived property
myProfile.placesLived.forEach( placeLived => {

    // Create HTML <dt> element and set its text content to the 'place' property
    let dtElement = document.createElement("dt");
    dtElement.textContent = placeLived.place;

    // Create HTML <dd> element and set its text content to the 'length' property
    let ddElement = document.createElement('dd');
    ddElement.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(dtElement);
    document.querySelector("#places-lived").appendChild(ddElement);
});

