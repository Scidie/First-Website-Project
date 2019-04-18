// dialog button
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

// collapsible
let collapsible = document.getElementsByClassName("collapsible");

collapsible[0].addEventListener('click', function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

// news cards collapsible
let cardCollapsible = document.getElementsByClassName("card-collapsible-button");

for (let i = 0; i < cardCollapsible.length; i++) {
    cardCollapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if (content.style.maxHeight !== "0px") {
            content.style.maxHeight = "0px";
            cardCollapsible[i].innerHTML = "\\/";
        } else {
            content.style.maxHeight = "300px";
            cardCollapsible[i].innerHTML = "X";
        }
    });
}