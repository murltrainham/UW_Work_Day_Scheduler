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
console.log("test");

for (let i = 9; i < 5; i++) {

    var key="hour-"+i;
    var data ="asdf";

//template literal show with append HTML to the page
var template = `
<div class="row">
  <div>
    ${i}AM
  </div>
  <div>
    <textarea></textarea>
  </div>
  <div>
    <button dataHour="${i}">Save</button>
  </div>
</div>

`;
}

//event listner on save click
containerEl.on("click", function(event) {

    event.target.matches("button");

});