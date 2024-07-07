let grid_size = 16;

const grid = document.querySelector("div.grid");
const grid_input = document.querySelector("div.input input");
const grid_span = document.querySelector("div.input span");
const grid_button = document.querySelector("div.input button");

grid_button.addEventListener("click", () => {
    let new_grid_size = parseInt(grid_input.value);
    if(isNaN(new_grid_size)) {
        grid_input.value = "";
        alert("Please set the grid size to a valid value!");
    }
    else {
        grid_size = new_grid_size;
        setGrid(grid_size);
    }
});

function setGrid(size) {
    for(let i=0;i<size;i++) {
        grid.appendChild(makeRow(size));
    }
    grid_span.innerText = `Set grid size (current size is ${size})`;
}

function makeRow(size) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.flex = "auto";
    for(let i=0;i<size;i++) {
        row.appendChild(makeGridTile());
    }
    return row;
}

function makeGridTile() {
    const grid_tile = document.createElement("div");
    grid_tile.className = "gridtile";
    grid_tile.style.flex = "auto";
    grid_tile.style.border = "1px solid dimgray";
    return grid_tile;
}

setGrid(grid_size);