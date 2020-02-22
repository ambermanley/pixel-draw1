// // ***MODULE 1***

// // We need to create and add cells to our .grid
// //Write a for loop that will happen 64 times
// // Inside the for loop, create a new div with a class of cell
// // Append it to the grid

// // array of colors
// const PALETTE = [
//   "red",
//   "blue",
//   "orange",
//   "purple",
//   "pink",
//   "green",
//   "white",
//   "black",
//   "yellow"
// ];

// // ***MODULE 2***

// // Create makePalette function, call makePalette
// // In Module 01, we created a PALETTE array, and then looped over it to make the palette buttons
// // Take all of that code, and wrap it in a named function, called makePalette:

// function makePalette() {
//   for (let index = 0; index < PALETTE.length; index = index + 1) {
//     // access the color
//     const nextColor = PALETTE[index];

//     const button = $("<button />");
//     button.css("background-color", nextColor);
//     button.appendTo(".palette");
//   }
// }

// makePalette();

// // ===========

// function makeGrid() {
//   for (let index = 0; index < 64; index++) {
//     const cell = $('<div class="cell" />');
//     $(".grid").append(cell);
//   }
// }

// makeGrid();

// // ===========

// //placeholder
// let clickedColor;

// // function onPaletteClick() {
// //   if (clickedColor) {
// //     event.target.classList.toggle("active");
// //     console.log(event.target);
// //   }
// //   //what if there is nothing selected (no 'if' statement)?
// //   clickedColor = event.target;

// //   $(".palette button")
// //     .first()
// //     .addClass("active");
// // }

// const onPaletteClick = () => {
//   $(this).addClass("active");
//   console.log(event);
//   console.log(this);
// };

// $(".palette button").click(onPaletteClick);

// // function onGridClick() {

// // }
