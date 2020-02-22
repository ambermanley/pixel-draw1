function makePalette() {
  const PALETTE = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "white",
    "black"
  ];

  const paletteElement = $(".palette");

  for (let i = 0; i < PALETTE.length; i++) {
    let button = $("<button>");
    button.css("backgroundColor", PALETTE[i]);
    paletteElement.append(button);
  }

  $(".palette button")
    .first()
    .addClass("active");
}

makePalette();

function makeGrid() {
  const gridElement = $(".grid");

  for (let i = 0; i < 64; i++) {
    let cell = $('<div class="cell"></div>');
    gridElement.append(cell);
  }
}

makeGrid();

// ===========

// Write a new function called onPaletteClick

function onPaletteClick() {
  // First: remove the class of active from any palette button which is currently active
  $(".palette .active").removeClass("active");
  // Second: add the class of active to the target of the click. Remember the quick way to get the click target is to use $(this)
  $(this).addClass("active");
}

// Lastly, attach the function to the .palette button elements using the .click method

$(".palette button").click(onPaletteClick);

// ===========

// Like before, we need to write an onGridClick function and
// When we click, we need to read the background-color off of the palette .active cell, and transfer it to the target element

function onGridClick() {
  let activeColor = $(".palette .active").css("background-color");
  let cellColor = $(this).css("background-color");

  if (cellColor === activeColor) {
    $(this).css("background-color", "");
  } else {
    $(this).css("background-color", activeColor);
  }
}

//attach it to the .grid .cell elements using the .click method

$(".grid .cell").click(onGridClick);

// ===========

function onClearClick() {
  $(".grid .cell").css("backgroundColor", "");
}

$(".controls .clear").click(onClearClick);

// ===========

function onFillAllClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  $(".cell").css("backgroundColor", activeColor);
}

$(".controls .fill").click(onFillAllClick);

// ======

// Create onFillEmptyClick function

function onFillEmptyClick() {
  let activeColor = $(".palette .active").css("backgroundColor");
  let cells = $(".cell");

  // loop over grid cells, assign index of cells to 'cell'

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    // console.log($(cell).css("background-color"));

    if ($(cell).css("backgroundColor") == "rgba(0, 0, 0, 0)") {
      $(cell).css("backgroundColor", activeColor);
    }
  }
}

// attach to .controls .fill-empty on click

$(".fill-empty").click(onFillEmptyClick);
