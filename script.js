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
const numbs = document.querySelectorAll('.skill-title p:nth-of-type(2)');
const times = document.querySelectorAll('.skill-content .skill-inner .skill-fill-in');

function prog(pNumbs, pTimes) {
    pTimes.forEach(time => {
        time.addEventListener('webkitAnimationStart', precentageAnimationBar(pNumbs));
    })
}

function precentageAnimationBar(pNumbs) {
    pNumbs.forEach(numb => {
        let numbDisplay = numb.textContent;
        let iterator = 0;
        let time = 0;
        const durations = document.querySelectorAll('.skill-content .skill-outer .skill-inner .skill-fill-in');

        // ========== get-animation-duration-each-fill-in ==========
        durations.forEach(duration => {
            time = window.getComputedStyle(duration).animationDuration;
            time = (parseInt(time) * 1000) / parseInt(numbDisplay);
        })
        // ========== iterate-display-number-precentage ==========
        const iterateNumb = () => {
            if (iterator < numbDisplay) {
                numb.textContent = iterator++;
                setTimeout(iterateNumb, time - 10);
            } else {
                numb.textContent = numbDisplay;
            }

        }
        iterateNumb();
    });
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
    setTimeout(typeAnimation, 200);
}

function invokeWhenScroll() {
    // const box = document.querySelector('.text-content');
    const bd = document.querySelector('body');
    const getPages = document.querySelectorAll('.onScroll');
    const bar = document.querySelector('.about');
    window.addEventListener('scroll', () => {
        const onScreen = window.innerHeight;
        let breakpoint = 840;
        getPages.forEach(page => {
            let onViews = page.getBoundingClientRect().top;
            // onViews -= 0.01;

            if (onViews < onScreen / 10) {
                page.classList.add('active');
                if (bar) {
                    prog(numbs, times)
                }
            } else {
                page.classList.remove('active');

            }
            console.log(page.getAttribute('class') + " " + onScreen)
        })

        // console.log(onScreen);
    })

}

function test() {
    const bd = document.querySelectorAll('body > *');
    // console.log(bd);
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

invokeWhenScroll();
menuHandler();
serviceHovers();