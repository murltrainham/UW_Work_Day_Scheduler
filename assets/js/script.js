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

function saveOrama (){

input9 = ("");
stringify9 = [];
btn9 = document.getElementById("saveBtn9");


btn9.addEventListener("click", function(){
  input9 = document.getElementById("9").value
  localStorage.setItem("input9", JSON.stringify(input9));
});


//retreive localdata
//listen for savebtn click
//save typed data in local storage



}
saveOrama();