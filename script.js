function menuHandler() {
    const menuShow = document.querySelector('.menu-show');
    const menuList = document.querySelector('.menu-list');
    const exitMenu = document.querySelector('.exit-menu');
    const menuItem = document.querySelectorAll('.menu-list ul li a')
    if (menuShow) {
        menuShow.addEventListener('click', () => {
            exitMenu.classList.remove('hide-icon');
            menuShow.classList.add('hide-icon');
            menuList.classList.remove('hide-menu-list');
        })
    }

    if (exitMenu) {
        exitMenu.addEventListener('click', () => {
            menuList.classList.add('hide-menu-list');
            exitMenu.classList.add('hide-icon');
            menuShow.classList.remove('hide-icon');
        })
    }

    if (menuItem) {
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                exitMenu.classList.add('hide-icon');
                menuList.classList.add('hide-menu-list');
                menuShow.classList.remove('hide-icon');
            });
        })
    }
}

function serviceHovers() {
    const serviceItem = document.querySelectorAll('.service-item');
    const badge = document.querySelectorAll('.badge');
    for (let i = 0; i < serviceItem.length; i++) {
        if (serviceItem[i]) {
            serviceItem[i].addEventListener('mouseover', () => {
                if (badge[i]) {
                    badge[i].classList.add('active');
                }
            })
            serviceItem[i].addEventListener('mouseout', () => {
                if (badge[i]) {
                    badge[i].classList.remove('active');
                }
            })
        }
    }
}




let cursor = 0,
    pointer = 0;

function typeAnimation() {
    const text = document.querySelector('.typing');
    const text_Content = ['Khaidar', 'Web developer', 'Software Engineer', 'Tech Enthusiast'];
    let temp = '';
    let showText = '';

    if (cursor === text_Content.length) {
        cursor = 0;
    }
    temp = text_Content[cursor];
    showText = temp.slice(0, ++pointer);
    text.textContent = showText;
    if (showText.length === temp.length) {
        cursor++;
        pointer = 0;
    }
    setTimeout(typeAnimation, 400);
}




// function serviceHover() {
//     const serviceItem = document.querySelector('.service-item');
//     if (serviceItem) {
//         serviceItem.addEventListener('click', () => {
//             document.querySelectorAll('.badge').classList.add('active')

//         })
//     }
// }


// const slide = document.querySelector('swipper');
// const next = document.querySelector('swiper-button-next');
// const prev = document.querySelector('swiper-button-prev');
// next.addEventListener('click', () => {
//     slide.scrollLeft += 200;
// })
// prev.addEventListener('click', () => {
//     slide.scrollLeft -= 200;
// })
typeAnimation();
menuHandler();
serviceHovers();