window.addEventListener("load", function(){
    const section = document.querySelector("main");
    const clockRow = section.querySelector(".main_row:first-child .main_row-clock");
    const helloRow = section.querySelector(".main_row-hello");

    function printHello(hour) {
        if(hour < 7) {
            helloRow.textContent = "Good night!, tonic!";
        } else if (hour < 12) {
            helloRow.textContent = "Good morning!, tonic!";
        } else if (hour < 18 ){
            helloRow.textContent = "Good afternoon!, tonic!";
        } else if (hour < 22) {
            helloRow.textContent = "Good evening!, tonic!";
        } else {
            helloRow.textContent = "Good night!, tonic!";
        }
    }
    function printTime(){
        let today = new Date();

        let tmpHour = today.getHours();
        let tmpMinute = today.getMinutes();
        // let tmpSecond = today.getSeconds();

        let hour = tmpHour > 12 ? (tmpHour - 12).toString().padStart(2, '0') : tmpHour.toString();
        let minute = tmpMinute < 10 ? tmpMinute.toString().padStart(2, '0') : tmpMinute.toString();
        // let second = tmpSecond < 10 ? tmpSecond.toString().padStart(2,'0') : tmpSecond.toString();
        
        clockRow.textContent = `${hour}:${minute}`;
        printHello(tmpHour);
    }
    
    printTime();
    setInterval(printTime, 1000);
})



// clockRow.textContent = "12:00";
