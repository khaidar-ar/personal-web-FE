import {
    products
} from './entity.js';


const product = document.querySelector('#products');
const breakPoint = window.matchMedia('(max-width:700px)').matches;
const filterChoose = document.querySelectorAll('.dropdown-item');
const merkFlex = document.querySelector('.merk-menu');
const categoryFlex = document.querySelector('.category-menu');
const merk = document.querySelector('.merk');
const category = document.querySelector('.category');

//object init
for (let i of products.data) {
    //Create Card
    let card = document.createElement("li");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, i.brand, "hide", "splide__slide");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("card-img-top")
    card.appendChild(image);
    card.appendChild(image);
    //container
    let textContent = document.createElement("div");
    textContent.classList.add("text-content", "card-body", "mb-5");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name", "card-title");
    name.innerText = i.productName.toUpperCase();
    textContent.appendChild(name);

    let brand = document.createElement("h6");
    brand.classList.add("product-brand");
    brand.innerText = i.brand.toUpperCase();
    textContent.appendChild(brand);

    let category = document.createElement("h6");
    category.classList.add("product-category");
    category.innerText = i.category.toUpperCase();
    textContent.appendChild(category);
    //price
    let price = document.createElement("p");
    price.innerText = "$" + i.price;
    price.classList.add("card-text");
    textContent.appendChild(price);

    let buy = document.createElement("a");
    buy.innerText = "buy";
    buy.classList.add("btn", "btn-primary", "btn-buy", "mb-3");
    textContent.append(buy);
    card.appendChild(textContent);
    product.appendChild(card);
}

//display filter flex
const filterBtn = () => {
    filterChoose.forEach(item => {
        item.addEventListener('click', () => {
            filterMenu(item.innerHTML, merkFlex, categoryFlex);
        })
    })
}

const filterBtnMobile = () => {
    const filter = document.querySelectorAll('.filter-choose');
    filter.forEach(choose => {
        choose.addEventListener('click', () => {
            filterMenu(choose.innerHTML, merk, category);
        });
    })
}

const filterMenu = (item, menuMerk, menuCtg) => {
    if (item.toUpperCase() === "all".toUpperCase()) {
        menuMerk.classList.add('hide');
        menuCtg.classList.add('hide');
    }
    if (item.toUpperCase() === "merk".toUpperCase()) {
        menuMerk.classList.remove('hide');
        menuCtg.classList.add('hide');
    }
    if (item.toUpperCase() === "category".toUpperCase()) {
        menuMerk.classList.add('hide');
        menuCtg.classList.remove('hide');
    }
}


const filterize = () => {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(btn => {
        let value = btn.innerHTML;
        btn.addEventListener('click', () => {
            //select all cards
            filterProduct(value);
            // console.log(filterProduct(value));
        })

    })
}

function filterProduct(value) {
    let idx = [];
    let elements = document.querySelectorAll(".card");
    elements.forEach((element, i) => {
        //display all cards on 'all' button click
        if (value.toUpperCase() === "all".toUpperCase()) {
            element.classList.remove("hide");
        } else {

            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
                console.log(value)

            } else {
                //hide other elements
                element.classList.add("hide");
                idx.push(i);
            }
        }
    });
    return idx;
}

const searchMode = () => {
    //Search button click
    document.getElementById("search").addEventListener("click", () => {
        //initial DOM object
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
        //grap all elements
        elements.forEach((element, index) => {
            //check if text contain search value
            if (element.innerText.includes(searchInput.toUpperCase())) {
                //display card
                cards[index].classList.remove("hide");
            } else {
                //hide others
                cards[index].classList.add("hide");
            }
        });
    });
}

//media-queries matches
const displayMenu = () => {
    const filter = document.querySelector('.filter');
    if (breakPoint) {
        filter.setAttribute('style', 'width:30%');
        filterBtnMobile();
    } else {
        filterBtn();
        merkFlex.classList.add('.hide')
        categoryFlex.classList.add('.hide')
    }
}



//Invoke display all product onCreate
window.onload = () => {
    filterProduct("all");
};
//invoke all method here
displayMenu();
searchMode();
filterize();



var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    rewind: true,
    rewindSpeed: 4000,
    gap: '2em',
    breakpoints: {
        700: {
            perPage: 1,
        }
    }
});

splide.mount();