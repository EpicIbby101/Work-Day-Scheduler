let currentDay = dayjs().format("dddd D MMM YYYY");
$("#currentDay").text(`Today is: ${currentDay}`)

let workHours = [
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
];

let container = $('.container');

workHours.forEach(function (hour) {
    let timeBlock = $('<div>').addClass('row time-block');
    let hourCol = $('<div>').addClass('col-md-1 hour').text(hour);
    let descriptionCol = $('<textarea>').addClass('col-md-10 description');
    let saveBtnCol = $('<button>').addClass('col-md-1 saveBtn').html('<i class="fas fa-save"></i>');

    timeBlock.append(hourCol, descriptionCol, saveBtnCol);
    container.append(timeBlock)
})