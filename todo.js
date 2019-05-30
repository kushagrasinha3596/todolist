$(document).ready(function(){
    // console.log("Jquery triggered");
    $("#addTask").click(function(){
        // console.log("Jquery triggered");
        $(".parentContainer").append("<div style='border:2px solid red;height:70px;width:220px'></div>");   
    });

    var htmlFragment = ("<div style='width:280px;height:60px;margin: auto'>"+
    "<pre>"+
     "<input type='checkbox' onchange='addToCompletedSection(this)' id='#elementInTodoList'></input><label for='elementInTodoList'> </label> <input type='text' id='elementInTodoList'></input> <button type='button'>Delete</button>"+
     "</pre>"+
    "</div>"+
    "<hr>");

    $("#addItem").on('click',function(){
        $("#todoParent").append($(htmlFragment));
    });

    function addToCompletedSection(obj){
        console.log("Kushagra");
        if ($(obj).is(':checked')) {
            console.log("Kushagra");
            $("#completed").append($(htmlFragment));
        }
    }
});