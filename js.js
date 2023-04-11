// the submit event 

const usernamePattern = /^[0-9a-zA-Z]{6,12}$/;
const form = document.querySelector(".myform");
const userul = form.idusername.value;
const feedback = document.querySelector(".feedback")
// const username = document.querySelector("#idusername");

form.addEventListener("submit", ceva => {
  ceva.preventDefault();
  console.log(form.idusername.value)
  if (usernamePattern.test(userul)) {
    feedback.textContent = "good";
  } else {
    feedback.textContent = "bad";
  }

});

// the end of the submit event


// live verification of the pattern 
form.idusername.addEventListener("keyup", ceva => {
  if (usernamePattern.test(ceva.target.value)) {
    form.idusername.className = "success";
    feedback.textContent = "Your user meets the minimum requirements";
  } else {
    form.idusername.className = "fail";
    feedback.textContent = "The username should only contain numbers and letters";
  }
});