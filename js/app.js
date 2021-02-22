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
    // Declaration of buttons and counter
const buttons = document.querySelectorAll("button");
const counter = document.getElementById("counter");
// Using forEach()
buttons.forEach((element) => {
    // Event Listener
    element.addEventListener("click", function(){
      let add = counter++;
      let substract = counter--;
       if(element.innerHTML ==== "add count"){
        add;
       } else if(count > 0){
            counter.style.background = "green";
       } else if(element.innerHTML ==== "add count"){
             substract;
       }else{
           counter.style.background = "red";
       }
      // Setting positive values green and negatives values red
      //counter.innerHTML > 0 ? counter.style.color = "green": counter.style.color = "red";
    }) 
});
})();
