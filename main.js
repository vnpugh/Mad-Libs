// User input variables
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variable to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

// Variable for the form
const form = document.querySelector("form");

// Variable for the mad lib story
const story = `My friends and I started a secret club! We meet every day by 
  the <b>${adj1}</b> <b>${noun1}</b>. Our club has some special rules. If you want to 
  join, you have to wear a <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}</b>. You are not allowed to
  <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for breakfast.
  If you are interested in joining, let me know!`;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // form validation
  if (
    adj1.value &&
    noun1.value &&
    adj2.value &&
    clothing.value &&
    bodyPart.value &&
    verb1.value &&
    food.value
  ) {
    madLibDisplay.innerHTML = story
      .replace(`${adj1}`, adj1.value)
      .replace(`${noun1}`, noun1.value)
      .replace(`${adj2}`, adj2.value)
      .replace(`${clothing}`, clothing.value)
      .replace(`${bodyPart}`, bodyPart.value)
      .replace(`${verb1}`, verb1.value)
      .replace(`${food}`, food.value);
  } else {
    // Display validation error 
    alert("Please fill out all fields.");
  }
});
