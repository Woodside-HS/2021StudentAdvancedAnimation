// GameArea class to create all the DOM elements in code rather than html

function GameArea(){
    //  create Wrapper Div
    let wrapperDiv = document.createElement("div");
    wrapperDiv.id = "wrapperDiv";   // wrapperDiv gets its style from mystyles.css
    document.body.appendChild(wrapperDiv);  // child of the document body

    // create tileMenuDiv
    let tileMenuDiv = document.createElement("div");
    wrapperDiv.appendChild(tileMenuDiv) // tileMenuDiv is child of wrapperDiv
    tileMenuDiv.setAttribute("style", " background-color:#033c4a; width:1100px; height:100px;float:left;");

    // create canvasDiv
    let canvasDiv = document.createElement("div");
    wrapperDiv.appendChild(canvasDiv);  // canvasDiv is child of wrapperDiv
    canvasDiv.setAttribute("style", " background-color:pink; width:1100px; height:700px;float:left;");

    // create canvas
    let canvas =  document.createElement("canvas");
    canvas.id = 'canvas'; // gets its style from mystyles.css
    canvas.width = 1096;  // 800 - 4 for the border
    canvas.height = 696; // 700 - 4 for the border
    canvasDiv.appendChild(canvas);  // canvas is child of canvasDiv

    //  create tiles for tile menu
    //  tiles get their style from the .tile class in mystyles.css
    //  each tile has a child that is a text node
    this.tiles = [];    // array of tiles
    for(let i = 0; i < 6; i++){
       this.tiles[i] = document.createElement("div");
       tileMenuDiv.appendChild(this.tiles[i]);      // each tile is a child of the tileMenuDiv
       this.tiles[i].setAttribute("class", "tile"); // all tiles have the same class attribute
       // append a text node child to the tile
       this.tiles[i].appendChild(document.createTextNode("Tile " + (i + 1)));
       //this.t1Text.style.padding = "10px";
    }
}
