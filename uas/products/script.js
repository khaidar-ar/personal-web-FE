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
const filter = document.querySelectorAll('.filter-choose');


const initialize = () => {
    let data = [];
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
        data.push(card);

    }
    return data;
}
//========== slide object init ==========
let dataProducts = initialize();



//========== display filter flex ==========
const filterBtn = () => {
    filterChoose.forEach(item => {
        item.addEventListener('click', () => {
            filterMenu(item.innerHTML, merkFlex, categoryFlex);
        })
    })
}
//========== filter button on mobile-view ==========
const filterBtnMobile = () => {

    filter.forEach(choose => {
        choose.addEventListener('click', () => {
            //invoke filter menu
            filterMenu(choose.innerHTML, merk, category);
        });
    })
}
const displayToggleTittle = () => {
    let filterToggle = document.querySelector('.filter-toggle');
    let merkToggle = document.querySelector('.merk-toggle');
    let categoryToggle = document.querySelector('.category-toggle');
    let merkFilter = document.querySelectorAll('.merk-choose');
    let categoryFilter = document.querySelectorAll('.category-choose');
    const toggleTitle = document.querySelectorAll('.dropdown-toggle');

    toggleTitle.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (filterToggle) {
                filter.forEach(choose => {
                    choose.addEventListener('click', () => {
                        filterToggle.innerHTML = choose.innerHTML;
                    })
                });
            }
            if (merkToggle) {
                merkFilter.forEach(choose => {
                    choose.addEventListener('click', () => {
                        merkToggle.innerHTML = choose.innerHTML;
                    })
                });
            }
            if (categoryToggle) {
                categoryFilter.forEach(choose => {
                    choose.addEventListener('click', () => {
                        categoryToggle.innerHTML = choose.innerHTML;
                    })
                });
            }
        })
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
    dataProducts.forEach((data => {
        //display all cards on 'all' button click
        if (value.toUpperCase() === "all".toUpperCase()) {
            data.classList.remove("hide");
            // product.appendChild(data);
        } else {
            //Check if element contains category class
            if (data.classList.contains(value)) {
                //display element based on category
                data.classList.remove("hide");
                // product.appendChild(data);
            } else {
                //hide other elements
                data.classList.add("hide");
            }
        }
    }));
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

//==========media-queries matches ==========
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



//========== Invoke display all product onCreate ==========
window.onload = () => {
    filterProduct("all");
};
//invoke all method here
displayMenu();
searchMode();
filterize();
displayToggleTittle()


//========== slider carousel ==========
var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '1em',
    padding: {
        left: '1rem',
        right: '2rem'
    },
    breakpoints: {
        700: {
            perPage: 1,
            gap: '4em',
            focus: 'center',
        }
    }
});

splide.mount();