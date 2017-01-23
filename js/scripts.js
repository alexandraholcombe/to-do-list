//Business Logic
function Task(input) {
  this.task = input;
};

var addCheckbox = function(task) {
  return "<div class='form-check'><label class='form-check-label'><input class='form-check-input' type='checkbox' value=''>" + task + "</label></div>"
};

//User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();

    var newTask = new Task(userInput);



    $("#to-do").append(addCheckbox(newTask.task));

    $("input").val("");
  });
});
