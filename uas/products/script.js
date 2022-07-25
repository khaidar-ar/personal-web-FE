import {
    products
} from './entity.js';

for (let i of products.data) {
    //Create Card
    let card = document.createElement("li");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide", "splide__slide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("card-img-top")
    imgContainer.appendChild(image);
    card.appendChild(image);
    //container
    let textContent = document.createElement("div");
    textContent.classList.add("text-content", "card-body");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name", "card-title");
    name.innerText = i.productName.toUpperCase();
    textContent.appendChild(name);
    //price
    let price = document.createElement("p");
    price.innerText = "$" + i.price;
    price.classList.add("card-text");
    textContent.appendChild(price);

    let buy = document.createElement("a");
    buy.innerText = "buy";
    buy.classList.add("btn", "btn-primary");
    textContent.append(buy);
    card.appendChild(textContent);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});
//Initially display all products
window.onload = () => {
    filterProduct("all");
};


var splide = new Splide('.splide', {
    perPage: 3,
    rewind: true,
});

splide.mount();