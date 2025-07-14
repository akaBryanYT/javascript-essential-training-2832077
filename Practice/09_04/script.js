/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let body = document.querySelector("body");
let grid = document.querySelector(".grid");

let cells = grid.querySelectorAll(".cell");

body.addEventListener("keypress", (event) => {
	if (event.key == "j") {
		body.style.backgroundColor =
			body.style.backgroundColor == "black" ? "white" : "black";
	}
});

grid.addEventListener("mouseenter", () => {
	grid.classList.add("hover");
});

grid.addEventListener("mouseleave", () => {
	grid.classList.remove("hover");
});

cells.forEach(cell => {
	cell.addEventListener("click", () => {
		if (cell.classList.contains("clicked")) {
			cell.classList.remove("clicked");
		} else {
			cell.classList.add("clicked");
		}
	});

	cell.addEventListener("mouseenter", () => {
		cell.classList.add("hover");
	});

	cell.addEventListener("mouseleave", () => {
		cell.classList.remove("hover");
	});
});
