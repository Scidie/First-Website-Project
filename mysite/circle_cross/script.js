class Board {
    static BODY = "body";
    static CONTAINER_ID = "container";
    static CIRCLE_CROSS_CONTAINER = "asd";

    static MarkupType = {
        DIV_ID: "DIV_ID",
    };

    constructor() {
        document.write(Board.createMarkup());
        CSS.addBoardStyle();
    }

    static createMarkup() {
        return `<div id=\"${this.CONTAINER_ID}\"><div id=\"${this.CIRCLE_CROSS_CONTAINER}\">asd</div></div>`;
    }
}

class CSS {
    static addBoardStyle() {
        var styles = `
    .${Board.CONTAINER_ID} { 
        font-family: Georgia,Cambria,"Times New Roman",Times,serif;
        margin: 26px auto 0 auto;
        max-width: 650px;
        
    }
    .${Board.BODY} {
        font-size: 18px;
        line-height: 1.58;
        letter-spacing: -.004em;color: #303030;
    }
    `
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    }
}

asd = new Board();
