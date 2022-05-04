

function fn_act() {
    console.log("button clicked!");
    const arrow_menu = document.querySelector(".arrow_menu");
    var classes = arrow_menu.classList;
    if(classes.contains("act")) {
        classes.remove("act");
    } else {
        classes.add("act");
    }
    console.log("process completed!");
}
