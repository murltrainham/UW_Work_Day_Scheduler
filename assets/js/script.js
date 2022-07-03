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

**Misc / Notes from zoom recordings: 
9-5 timeline
Fully functional CSS just need to add correct HTML 
add id timeEntries to class "container" in HTML 

for (let i = 9; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

HTML data attributes around the clicked button

**Workflow:
HTML: add timeblocks @ ln 23 (9-5)
id current day element
CSS:
JavaScript:
(1) 

// localStorage.setItem(key, value);

add current moment day/time 
global variables
add click listner
for loop cycle userinput block color change

# = jquery id attribute element selector

In jQuery, the class and ID selectors are the same as in CSS. If you want to select elements with a certain class, use a dot (.) and the class name.
If you want to select elements with a certain ID, use the hash symbol (#) and the ID name. 
Note that HTML is not case-sensitive, therefore it is best practice to keep HTML markup and CSS selectors lowercase.

https://www.freecodecamp.org/news/jquery-selectors/

https://www.w3schools.com/js/js_json.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

https://api.jquery.com/each/

https://www.w3schools.com/js/js_this.asp

https://javascript.info/bubbling-and-capturing

https://api.jquery.com/category/manipulation/

overall goal function


*/
// empty global var / current time retreived from moment
let currentTime = moment().hour();
console.log(currentTime);
// Display current date/time in header (p id = "currentDay" class = "lead")
// variable defining moment day/time and format
var presentTime = moment().format("LLLL");
// console.log(presentTime) to ensure moment is working
console.log(presentTime);
// select currentDay HTML element and render our presentTime variable 
$("#currentDay").html(presentTime);

//change text area bg color loop based on presentTime check against static HTML times
var colorLoop = function() {

  $("#timeEntries")


};

colorLoop();