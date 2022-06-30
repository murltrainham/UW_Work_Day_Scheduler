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

*/
// Display current date/time in header (p id = "currentDay" class = "lead")

// variable defining moment day/time and format
var presentTime = moment().format("LLLL");
// console.log(presentTime) to ensure moment is working
console.log(presentTime);
// 
$("lead").html(presentTime);
