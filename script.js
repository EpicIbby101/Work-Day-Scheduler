$(document).ready(function () {
  let currentDay = dayjs().format("dddd D MMM YYYY");
  $("#currentDay").text(`Today is: ${currentDay}`);

  let workHours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  let container = $(".container");

  workHours.forEach(function (hour) {
    let timeBlock = $("<div>").addClass("row time-block");
    let hourCol = $("<div>").addClass("col-md-1 hour").text(hour);
    let descriptionCol = $("<textarea>").addClass("col-md-10 description");
    let saveDeleteCol = $("<div>").addClass("col-md-1");
    let saveBtnCol = $("<button>")
      .addClass("col-md-1 saveBtn")
      .html('<i class="fas fa-save"></i>');
    let deleteBtnCol = $("<button>")
      .addClass("col-md-1 deleteBtn")
      .html('<i class="fas fa-trash"></i>');
    saveDeleteCol.append(saveBtnCol, deleteBtnCol);

    timeBlock.append(hourCol, descriptionCol, saveDeleteCol);
    container.append(timeBlock);
  });

  $(".saveBtn").on("click", function () {
    let hour = $(this).closest(".time-block").find(".hour").text();
    let event = $(this).closest(".time-block").find(".description").val();
    localStorage.setItem(hour, event);
  });

  $(".deleteBtn").on("click", function () {
    let hour = $(this).closest(".time-block").find(".hour").text();
    localStorage.removeItem(hour);
    $(this).closest(".time-block").find(".description").val("");
  });

  function loadEvents() {
    workHours.forEach(function (hour) {
      let event = localStorage.getItem(hour);
      $(".description").each(function () {
        if ($(this).siblings(".hour").text() === hour) {
          $(this).val(event);
        }
      });
    });
  }

  loadEvents();

  function updateColors() {
    let currentHour = dayjs().format("h A");
    $(".time-block").each(function () {
      let blockHour = $(this).find(".hour").text();
      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour == currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }
  updateColors();
  setInterval(updateColors, 60000);
});
