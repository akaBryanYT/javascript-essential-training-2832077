/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const feature = document.querySelector(".feature");

feature.classList.add("new-class");

feature.classList.add("second-class");

feature.classList.remove("new-class");

console.log(feature.classList);

feature.setAttribute("data-new", "13");

feature.style.backgroundColor = "pink";

console.log(feature.attributes);
