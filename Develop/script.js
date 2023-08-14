// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY h:mm:ss"));
var hour = document.querySelectorAll("[index]")
var currentTime = parseInt(dayjs().format('H'));
var timeBlock = document.querySelectorAll(".time-block");
var description = document.querySelector('textarea');
$(timeBlock).each(function (index) {
  console.log(index + 9);
})
var index = timeBlock[""] + 9
$(timeBlock).each(function (index) {
  if ((index) < currentTime) {
    $(timeBlock).addClass('past');
  }
  else if ((index) === currentTime) {
    $(timeBlock).addClass('present');
    $(timeBlock).removeClass('past')
    $(timeBlock).removeClass('future');
  }
  else {
    $(timeBlock).addClass('future');
    $(timeBlock).removeClass('past');
    $(timeBlock).removeClass('present');
  }

}
);


function saveText(){
  var textsBlock = description.value;
  localStorage.setItem("textsBlock", textsBlock)};


var saveBtn = $('.saveBtn')
saveBtn.on('click', function (event) {
  event.preventDefault();
   saveText()
 });


var textsBlock = description.value
var savedText = localStorage.getItem("textsBlock");
console.log(savedText);
$(description).each(function () {document.querySelector('textarea').textContent = savedText})


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


/*//2) Each block is savable independent of the other blocks
      // Select the immediate parent container of ALL of the buttons
  var container = document.querySelector('.container-lg');
  // Event listener on the PARENT container of all the buttons
  container.addEventListener('click', (event) => {
    // conditional that checks if the element that was clicked is a button
    if (event.target.className.includes('btn')) {
      // If a button element was clicked, print the value of the textbox next to THAT button.
      console.log(event.target.previousElementSibling.value)
    }
  })*/