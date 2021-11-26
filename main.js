const cursor = document.querySelector(".cursor");
var timeout;

// Follow Cursor On Mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Cursor Effects When Mouse Stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Cursor Effects When Mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});