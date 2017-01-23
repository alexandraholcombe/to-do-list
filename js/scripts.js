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

    $(".form-check").append("<label class='form-check-label'><input class='form-check-input' type='checkbox' value=''>" + newTask.task + "</label>");

    $("input").val("");
  });
});
