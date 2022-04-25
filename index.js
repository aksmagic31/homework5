

// show the date using moment at the top of the page
var today = moment();
$("#date").text(today.format("MMM Do, YYYY"));

// list the possible working hours

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function makeTimeblocks(hour, existingTodo = "") {
  //build some additional logic for if time is past present or future;
  var currentHour = new Date().getHours() - 10;
  var presentPastOrFuture = "future";
  if (currentHour > hour + 9) presentPastOrFuture = "past";
  if (currentHour === hour + 9) presentPastOrFuture = "present";
  var hourName = hours[hour];
  var existingTodo = localStorage.getItem(hourName);

  // create the time blocks for all hours
  console.log("SAVED TODO for ", hourName, existingTodo);
  $(".container").append(
    $(`
    <div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}" cols="30" rows="3" class="description col-9 ${presentPastOrFuture}">${
      existingTodo || ""
    }</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`)
  );


}
// make the time blocks
for (var i = 0; i < 9; i++) {
  makeTimeblocks(i);
}


// create event listener for each button
var btns = document.querySelectorAll(".saveBtn");
console.log(btns[0]); //ONLY SELECTS THE FIRST ELEMENT THAT MATCHES SELECTOR

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", functionToHandleClickOnSaveBtn);
}




function functionToHandleClickOnSaveBtn(event) {
  // save the click


  var todoValue = event.target.parentNode.children[1].value;
  var todoKey = event.target.parentNode.children[1].id;

  console.log("key values ", todoKey, todoValue);
  //store the keyval pair in localStorage
  localStorage.setItem(todoKey, todoValue);
  
  //show schedule after submiting
  var schedules = document.createElement("li")
  schedules.textContent = todoKey + ": " + todoValue
  getSchedule.appendChild(schedules)


}
var getSchedule = document.getElementById("getSchedule")

