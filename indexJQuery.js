$(document).ready(() => {
  $("h1").css("font-weight","bold")
    $(".add-btn").click(() => {
        
        let input_Value = $("#ip-value").val();
        // if(input_Value !==""){
        //     $(".list").append("<li></li>");
        // }
        if (input_Value === "") {
            alert("Please enter a task!");
        }
        else {
            // alert("Ok");
            let item = $("<p></p>").attr("id", "para");
            let btn = $("<button></button>").text("X").addClass("del-btn");
            item.append(input_Value);
            item.append(btn);
            $(".list").append(item);
        }
        // clear
        $("#ip-value").val("");
    });
    $(".list").on("click", ".del-btn", function () {
        console.log("Remove the delete button is successfully run")
        $(this).parent().remove(); // remove the parent <p> (the todo item)
    });
    // select or unselect
    $(".list").on("click", "p", function () {
        
        if ($(this).hasClass("completed")) {
            // console.log("NOT Applied Color")

            $(this).removeClass("completed").css({ "background-color": "", "color": "" });
            
        } else {
            // console.log("Color Applied")
            
            $(this).addClass("completed").css({ "background-color": "#ccc", "color": "white" });
        }
    });
});