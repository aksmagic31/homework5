var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function makeTimeblocks(hour, existingTodo = "") {
  //build some additional logic for if time is past present or future;
  var currentHour = new Date().getHours() - 10;
  var presentPastOrFuture = "future";
  if (currentHour > hour + 9) presentPastOrFuture = "past";
  if (currentHour === hour + 9) presentPastOrFuture = "present";
  var hourName = hours[hour];
  var existingTodo = localStorage.getItem(hourName);
  // if (!existingTodo) existingTodo = "";
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

  //free feel to do the non-jquery equiv.
}

for (var i = 0; i < 9; i++) {
  makeTimeblocks(i);
}

//still need to add click event listeners so when a block is clicked, grabs the value from that textarea, and saves it in localStorage.
var btns = document.querySelectorAll(".saveBtn");
console.log(btns[0]); //ONLY SELECTS THE FIRST ELEMENT THAT MATCHES SELECTOR

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", functionToHandleClickOnSaveBtn);
}

function functionToHandleClickOnSaveBtn(event) {
  //do some logic here

  var todoValue = event.target.parentNode.children[1].value;
  var todoKey = event.target.parentNode.children[1].id;

  console.log("key values ", todoKey, todoValue);
  //store the keyval pair in localStorage
  localStorage.setItem(todoKey, todoValue);
}
//when app first loads, need to grab all existing todos and show on the page
