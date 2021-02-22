(function() {
    // Reference of buttons
  const buttons = document.querySelectorAll("button");
    // Defining count variable
  let count = 0;
    // Using forEach()
  buttons.forEach((element) => {
    // Adding event listener to buttons
  element.addEventListener("click", function() {
    // If substract  button 
  if(element.classList.contains("prevBtn")){
  count--
    // If add  button 
  }else if(element.classList.contains("nextBtn")){
  count++
  }
  // Reference to where it would be display 
  const counter = document.getElementById("counter")
  // Setting inner value to varaibles "count"
  counter.innerHTML = count
  // Changing color 
   if(count > 0){
   counter.style.color = "green"
   }else if(count < 0){
   counter.style.color = "red"
   }else {
   counter.style.color = "#333333"
   } 
  })
  })
})();
