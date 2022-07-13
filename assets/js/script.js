/*
**Acceptance criteria:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
(1)THEN the current day is displayed at the top of the calendar
WHEN I scroll down
(2)THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
(3)THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
(4)THEN I can enter an event
WHEN I click the save button for that time block
(5)THEN the text for that event is saved in local storage
WHEN I refresh the page
(6)THEN the saved events persist

https://www.freecodecamp.org/news/jquery-selectors/

https://www.w3schools.com/js/js_json.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

https://api.jquery.com/each/

https://www.w3schools.com/js/js_this.asp

https://javascript.info/bubbling-and-capturing

https://api.jquery.com/category/manipulation/

https://javascript.info/event-delegation

https://www.tutorialspoint.com/jquery/jquery-css.htm

https://www.sitepoint.com/jquery-each-function-examples/

https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split



//$(".timeblock").addClass("future");
//$(".hour").addClass("future");
//$(".description").addClass("future");
*/

var date = new Date();
var dateHours = date.getHours();
$("#currentDay").html(date);
console.log(dateHours);

function conditionalTsunami() {

  if (dateHours === 9) {
    $("#9").addClass("present");
  } else if (dateHours > 9) {
    $("#9").addClass("past");
  } else {
    $("#9").addClass("future");
  }

  if (dateHours === 10) {
    $("#10").addClass("present");
  } else if (dateHours > 10) {
    $("#10").addClass("past");
  } else {
    $("#10").addClass("future");
  }

  if (dateHours === 11) {
    $("#11").addClass("present");
  } else if (dateHours > 11) {
    $("#11").addClass("past");
  } else {
    $("#11").addClass("future");
  }

  if (dateHours === 12) {
    $("#12").addClass("present");
  } else if (dateHours > 12) {
    $("#12").addClass("past");
  } else {
    $("#12").addClass("future");
  }

  if (dateHours === 13) {
    $("#13").addClass("present");
  } else if (dateHours > 13) {
    $("#13").addClass("past");
  } else {
    $("#13").addClass("future");
  }

  if (dateHours === 14) {
    $("#14").addClass("present");
  } else if (dateHours > 14) {
    $("#14").addClass("past");
  } else {
    $("#14").addClass("future");
  }

  if (dateHours === 15) {
    $("#15").addClass("present");
  } else if (dateHours > 15) {
    $("#15").addClass("past");
  } else {
    $("#15").addClass("future");
  }

  if (dateHours === 16) {
    $("#16").addClass("present");
  } else if (dateHours > 16) {
    $("#16").addClass("past");
  } else {
    $("#16").addClass("future");
  }

  if (dateHours === 17) {
    $("#17").addClass("present");
  } else if (dateHours > 17) {
    $("#17").addClass("past");
  } else {
    $("#17").addClass("future");
  }
}
conditionalTsunami();

/*function loadOrama (){

().each(function(){

});

}
loadOrama();
*/
function loadOrama (){

unStringify9 = JSON.parse(window.localStorage.getItem("input9"));
output9 = document.getElementById("9");
output9.value = unStringify9;

unStringify10 = JSON.parse(window.localStorage.getItem("input10"));
output10 = document.getElementById("10");
output10.value = unStringify10;

unStringify11 = JSON.parse(window.localStorage.getItem("input11"));
output11 = document.getElementById("11");
output11.value = unStringify11;

unStringify12 = JSON.parse(window.localStorage.getItem("input12"));
output12 = document.getElementById("12");
output12.value = unStringify12;

unStringify13 = JSON.parse(window.localStorage.getItem("input13"));
output13 = document.getElementById("13");
output13.value = unStringify13;

unStringify14 = JSON.parse(window.localStorage.getItem("input14"));
output14 = document.getElementById("14");
output14.value = unStringify14;

unStringify15 = JSON.parse(window.localStorage.getItem("input15"));
output15 = document.getElementById("15");
output15.value = unStringify15;

unStringify16 = JSON.parse(window.localStorage.getItem("input16"));
output16 = document.getElementById("16");
output16.value = unStringify16;

unStringify17 = JSON.parse(window.localStorage.getItem("input17"));
output17 = document.getElementById("17");
output17.value = unStringify17;

}
loadOrama();


function saveOrama (){

btn9 = document.getElementById("saveBtn9");
btn9.addEventListener("click", function(){
  input9 = document.getElementById("9").value;
  localStorage.setItem("input9", JSON.stringify(input9));
});

btn10 = document.getElementById("saveBtn10");
btn10.addEventListener("click", function(){
  input10 = document.getElementById("10").value;
  localStorage.setItem("input10", JSON.stringify(input10));
});

btn11 = document.getElementById("saveBtn11");
btn11.addEventListener("click", function(){
  input11 = document.getElementById("11").value;
  localStorage.setItem("input11", JSON.stringify(input11));
});

btn12 = document.getElementById("saveBtn12");
btn12.addEventListener("click", function(){
  input12 = document.getElementById("12").value;
  localStorage.setItem("input12", JSON.stringify(input12));
});

btn13 = document.getElementById("saveBtn13");
btn13.addEventListener("click", function(){
  input13 = document.getElementById("13").value;
  localStorage.setItem("input13", JSON.stringify(input13));
});

btn14 = document.getElementById("saveBtn14");
btn14.addEventListener("click", function(){
  input14 = document.getElementById("14").value;
  localStorage.setItem("input14", JSON.stringify(input14));
});

btn15 = document.getElementById("saveBtn15");
btn15.addEventListener("click", function(){
  input15 = document.getElementById("15").value;
  localStorage.setItem("input15", JSON.stringify(input15));
});

btn16 = document.getElementById("saveBtn16");
btn16.addEventListener("click", function(){
  input16 = document.getElementById("16").value;
  localStorage.setItem("input16", JSON.stringify(input16));
});

btn17 = document.getElementById("saveBtn17");
btn17.addEventListener("click", function(){
  input17 = document.getElementById("17").value;
  localStorage.setItem("input17", JSON.stringify(input17));
});


}
saveOrama();