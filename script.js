$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
     var food = $(".food").val();
     var amount= parseInt($(".amount").val()) * 91;
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = "In the year 2021, " + name + " will have eaten " + food + " "+ amount + " times " ;
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});