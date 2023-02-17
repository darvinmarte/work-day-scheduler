//presented with time blocks for standard business hours

//each time block is color-coded to indicate whether it is in the past, present, or future

// DEPENDENCIES


// //DATA
$(document).ready(function () {
  // // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  var hour = today.hour();

 
  var timeB = $('.time-block');
  var saver = $('.saveBtn');

  $(timeB).each(function () {
    currentThing = this;
    var myID = $(currentThing).attr('id');
    var value = myID.substring(5,7);
    console.log()

    if (value > hour) {
      $(currentThing).addClass("future");
    } else if (value == hour){
      $(currentThing).addClass("present");
     } else { 
      $(currentThing).addClass("past");
     }
  });
 
  



});




  // $(timeB).on('click', )
  


  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.

// .addEventListener("click", );




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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