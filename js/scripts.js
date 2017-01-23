//Business Logic
function Task(input) {
  this.task = input;
};

//User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();

    var newTask = new Task(userInput);

    $("#to-do ul").append("<li><span class='task'>" + newTask.task + "</span></li>");
  });
});
