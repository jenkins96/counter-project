/*(function() {
    // Declaration of buttons and counter
const buttons = document.querySelectorAll("button");
const counter = document.getElementById("counter");
// Using forEach()
buttons.forEach((element) => {
    // Event Listener
    element.addEventListener("click", function(){
      if(element.innerHTML === "add count" ){
          // Adding 1
          counter.innerHTML = Number(counter.innerHTML) + 1;    
      }else {
          // Substracting 1
 counter.innerHTML = Number(counter.innerHTML) - 1;      
      }
      // Setting positive values green and negatives values red
      counter.innerHTML > 0 ? counter.style.color = "green": counter.style.color = "red";
    }) 
});
})();
*/
// Having some trouble leaving value = 0 in default color :(

(function() {
  const buttons = document.querySelectorAll("button");
  let count = 0;
  buttons.forEach((element) => {
  element.addEventListener("click", function() {
  if(element.classList.contains("prevBtn")){
  count--
  }else if(element.classList.contains("nextBtn"){
  count++
  })
  const counter = document.getElementById("counter")
  counter.innerHTML = count
      
   if(counter > 0){
   counter.style.color = "green";
   }else if(counter < 0){
   counter.style.color = "red";
   }else {
   counter.style.color = "#333333"
   }
      
  })
  })
})();
