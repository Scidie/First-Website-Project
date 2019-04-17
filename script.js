let x = document.getElementById("myDialog");
let dialogButton = document.getElementById('dialogButton');

dialogButton.addEventListener('click', function () {
    if (x.open !== true) {
        x.open = true;
        dialogButton.innerText = "Close Dialog";
    } else {
        x.open = false;
        dialogButton.innerText = "Open Dialog";
    }
});
