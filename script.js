const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkNumber = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else {
    validateNumber();
  }
};

const clearResult = () => {
  result.innerText = "";
  userInput.value = "";
}

const validateNumber = () => {
    const regex1 = /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const regex2 = /(^\([()]*$|^[^()]*\)$|\([^()]*\))/
    if (regex1.test(userInput.value)) {
      if (userInput.value.includes("(") || userInput.value.includes(")")) {
        result.innerText = regex2.test(userInput.value)
      ? `Valid US number: ${userInput.value}`
      : `Invalid US number: ${userInput.value}`;
      } else {
      result.innerText = `Valid US number: ${userInput.value}`}
      
    } else {
      result.innerText = `Invalid US number: ${userInput.value}`;
      
    }
  return;  
}

checkButton.addEventListener("click", checkNumber);
clearButton.addEventListener("click", clearResult);