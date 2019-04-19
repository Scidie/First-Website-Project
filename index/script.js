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

//hiding and showing (panes) listener with use forEach function instead of "for" loop
const cardCollapsibleButton = Array.from(document.querySelectorAll('.card-collapsible-button'));

cardCollapsibleButton.forEach(button => button.addEventListener('click', function(event) {
    let content = event.target.nextElementSibling;
    
    if (content.style.maxHeight === "300px") {
        content.style.maxHeight = "0px";
        button.style.transform = 'rotate(0deg)'
    } else {
        content.style.maxHeight = "300px";
        button.style.transform = 'rotate(180deg)'
    }
}));
