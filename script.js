const ratingComponent = document.querySelector('.rating-wrapper');
const thanksComponent = document.querySelector('.thanks-wrapper');
const illustration = document.querySelector('.illustration');
const allRatings = document.querySelectorAll('.rating');
const numberOutput = document.querySelector('.number'); 
const submitButton = document.querySelector('.submit');

allRatings.forEach(rating => {
    rating.addEventListener('click', e => {
        allRatings.forEach(element => {
            element.classList.remove('selected');
        })
        e.target.classList.add('selected');
        numberOutput.textContent = e.target.textContent;
    })
});


submitButton.addEventListener('click', e => {
    allRatings.forEach(element => {
        if(element.classList.contains('selected')){
            thanksComponent.classList.remove('inactive');
            ratingComponent.classList.add('inactive');
        }
    })
});

illustration.addEventListener('click', e => {
    allRatings.forEach(element => {
        element.classList.remove('selected');
    })
    ratingComponent.classList.remove('inactive');
    thanksComponent.classList.add('inactive');
});

