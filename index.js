const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submitBtn");
const ratingState = document.getElementById("card");
const thankYouState = document.getElementById("overlay");
const displayResult = document.getElementById("output"); 


let selectedRating;


ratingButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        selectedRating = parseInt(button.dataset.value);
        ratingButtons.forEach(b => b.classList.remove(`active`));
        button.classList.add(`active`);
    });
});


submitButton.addEventListener(`click`, () => {
  if (selectedRating) {
    thankYouState.classList.remove(`hidden`);
    ratingState.classList.add(`hidden`);
    displayResult.textContent = `you selected ${selectedRating} out of 5`;

  } else{
    alert(`please select a rating!`);
  } 
});