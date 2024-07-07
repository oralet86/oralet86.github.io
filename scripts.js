let grid_size = 16;

const grid = document.querySelector("div.grid");

for(let i=0;i<grid_size;i++) {
    grid.appendChild(makeRow(grid_size));
}

function makeRow(size) {
    const row = document.createElement("div");
    row.className = "row";
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.flex = "auto";
    for(let i=0;i<grid_size;i++) {
        row.appendChild(makeGridTile());
    }
    return row;
}

function makeGridTile() {
    const grid_tile = document.createElement("div");
    grid_tile.className = "gridtile";
    grid_tile.style.flex = "auto";
    grid_tile.style.border = "2px solid dimgray";
    return grid_tile;
}