const btnFilters = document.querySelectorAll(".js-btn-filters");
const categoryOfPhotos = document.querySelectorAll(".js-gallery-category");

(() => {
    btnFilters.forEach(btn => {
        btn.addEventListener('click', onBtnClick);
        function onBtnClick() {
            const currentcategory = btn.dataset.filter;
            btnActivetoggle(btn, currentcategory);
            scrollToPortfolioList();
        }
    });
})();

function btnActivetoggle(currentBtn, currentcategory) {
    currentBtn.classList.add('js-btn-active');

    btnFilters.forEach(btn => {
        if (btn !== currentBtn) {
            btn.classList.remove('js-btn-active');
        }
    });

    filterGallery(currentcategory);
};

function filterGallery(currentcategory) {

    categoryOfPhotos.forEach(category => {
        if (currentcategory === "all") {
            animatedTransitionsMaker(category);
        } else if (currentcategory === category.dataset.filter) {
            animatedTransitionsMaker(category);
        } else {
            hidingPhotoMaker(category);
        }
    });
};

function animatedTransitionsMaker(category) {
    hidingPhotoMaker(category);
    setTimeout(() => {
        category.classList.remove('js-is-hidden', 'visually-hidden');
    }, 450);
};

function hidingPhotoMaker(category) {
    category.classList.add('js-is-hidden');
    setTimeout(() => category.classList.add('visually-hidden'), 450);
};

function scrollToPortfolioList() {
    const goToSection = document.querySelector('.filters-list');

    if (goToSection) {
        const goToSectionValue = goToSection.getBoundingClientRect().top;
        window.scrollBy({
            top: goToSectionValue - 22,
            behavior: "smooth",
        });
    }
};

// при фільтруванні галереї присутні стрибки футера, можна або виправити, або не буде видно при більшій к-сті карточок галереї




// це версія фільтрів по принципу чекбоксів написана для тренування
// п.с. незручно

// let arrActBtns = [];

// const btnFilters = document.querySelectorAll(".js-btn-filters");
// const cards = document.querySelectorAll(".portfolio__item");

// (() => {
//     btnFilters.forEach(btn => {
//         btn.addEventListener('click', onBtnClick);
//         function onBtnClick() {
//             const currentcategory = btn.dataset.filter;
//             btnActivetoggle(btn, currentcategory);
//         }
//     });
// })();

// function btnActivetoggle(currentBtn, currentcategory) {
//     currentBtn.classList.toggle('js-btn-active');

//     deactivatorBtnAll(currentcategory);
//     activatorBtnAll();
//     deactivatorAllActiveBtns(currentcategory);
    
//     activeBtnsRegisterMaker();
    

//     filterGallery(currentcategory);
//     activeBtnsRegisterRemove();
// };

// function filterGallery(currentcategory) {

//     if (currentcategory !== 'all') {            

//         hideAllCards();        
        
//         openCardByCategory();

//         openAllCardsIfNoActiveCategory();             

//     } else { openAllCards(); }
// };


// function activatorBtnAll() {
//     const arrOfNotActiveBtn = [];

//     btnFilters.forEach(btn => {
//         if (btn.dataset.filter !== 'all' && !btn.classList.contains('js-btn-active')) {
//             arrOfNotActiveBtn.push(true);
//         }
//     })

//     if (arrOfNotActiveBtn.length === btnFilters.length - 1) {
//         btnFilters.forEach(btn => {
//             if (btn.dataset.filter === 'all') {
//                 btn.classList.add('js-btn-active')
//             }
//         })
//     }

// };
// function deactivatorBtnAll(currentcategory) {
//     if (currentcategory !== 'all') {
//         btnFilters.forEach(btn => {
//             if (btn.dataset.filter === 'all') {
//                 btn.classList.remove('js-btn-active')
//             }
//         })
//     }
// };
// function deactivatorAllActiveBtns(currentcategory) {
//     if (currentcategory === 'all') {
//         btnFilters.forEach(btn => {
//             if (btn.dataset.filter !== 'all') {
//                 btn.classList.remove('js-btn-active')
//             }
//         })
//     }
// };
// function activeBtnsRegisterMaker() {
//     btnFilters.forEach(btn => {
//         if (btn.dataset.filter !== 'all' && btn.classList.contains('js-btn-active')) {
//             arrActBtns.push(btn.dataset.filter);
//             console.log(arrActBtns);
//         }
//     });
// };
// function activeBtnsRegisterRemove() {
//     arrActBtns = [];
// };


// function openCardByCategory() {
//     arrActBtns.forEach(actBtnCat => {
//         cards.forEach(card => {
//             if (actBtnCat === card.dataset.filter) {
//                 card.classList.remove('js-is-hidden', 'visually-hidden');
//             }
//         })
//     })
// }
// function openAllCardsIfNoActiveCategory() {
//     if (!arrActBtns.length) {
//         openAllCards();
//     }
// }
// function hideAllCards() {
//     cards.forEach(card => {
//         card.classList.add('js-is-hidden', 'visually-hidden');
//     })
// };
// function openAllCards() {
//     cards.forEach(card => {
//         card.classList.remove('js-is-hidden', 'visually-hidden');
//     });
// };