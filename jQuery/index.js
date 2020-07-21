$("h1").addClass("big-title margin-50").text("bye");

$("button").click(function() {
    $("h1").css("color", "purple");
})

//equivalent to:
//for (var i=0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//$("button").html("<em>Don't Click Me</em>");

$("a").attr("href", "https://www.yahoo.com");

//detects keydown
$("input").keydown(function(event) {
    $("h2").text(event.key);
})
//puts keys entered in textbox as h2
$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
})