$(document).ready(function(){
    // console.log("Jquery triggered");
    $("#addTask").click(function(){
        // console.log("Jquery triggered");
        $(".parentContainer").append("<div style='border:2px solid red;height:70px;width:220px'></div>");   
    });

    var htmlFragment = $("<div style='border:2px solid black;width:280px;height:60px'>"+
    "<pre>"+
     "<input type='checkbox' id='#elementInTodoList'></input><label for='elementInTodoList'> </label> <input type='text' id='elementInTodoList'></input> <button type='button'>Delete</button>"+
     "</pre>"+
    "</div>");

    $("#addItem").on('click',function(){
        console.log("Kushagra");
        $("#todoParent").append(htmlFragment);
    });
});