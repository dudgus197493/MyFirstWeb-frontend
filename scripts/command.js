window.addEventListener("load", function() {
    console.log("command script!");
    const form = document.querySelector(".main_row-form"),
        input = form.querySelector("#command_input");

    form.onsubmit = function(e) {
        e.preventDefault();
        // if (input.value == "admin") {
        //     window.open("https://www.naver.com");
        // }
        window.open("https://www.google.com/search?q=" + input.value); 
    }
})

