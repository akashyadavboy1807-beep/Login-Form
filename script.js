function togglePass() {
    p = document.getElementById("p")
    if(p.type === "password") {
        p.type = "text";
    } else {
        p.type = "password";
    }
}

let button = document.getElementById("btn")

button.addEventListener("click", function() {
    location.reload();
})
