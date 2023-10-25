
var today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY h:mm:ss"));
var hour = document.querySelectorAll("[index]")

let currentHour = dayjs().hour();
$(".time-block").each(function () {
  let timeBlock = $(this);
  let timeBlockId = timeBlock.attr("id");
  let timeBlockHour = parseInt(timeBlockId.split("-")[1]);

  timeBlock.removeClass("past present future");
  if (timeBlockHour < currentHour) {
    timeBlock.addClass("past");
  } else if (timeBlockHour === currentHour) {
    timeBlock.addClass("present");
  } else {
    timeBlock.addClass("future");
  }
});

$(".time-block").each(function () {
  let timeBlock = $(this);
  let id = timeBlock.attr("id");
  let savedData = localStorage.getItem(id);
  if (savedData !== null) {
    timeBlock.find(".description").val(savedData);
  }
});

$(".saveBtn").on("click", function () {
  let timeBlock = $(this).closest(".time-block");
  let id = timeBlock.attr("id");
  let userInput = timeBlock.find(".description").val();
  localStorage.setItem(id, userInput);})
  