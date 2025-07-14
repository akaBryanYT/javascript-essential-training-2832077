/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const article = {
	name: "Article",
	author: "Bryan",
	description: "This is my first article.",
	id: "article"
}

let main = document.querySelector("main");

function appendArticle(element, article) {

	let articleElement = `
		<ul id=${article.id}> 
			<li>Title: ${article.name}</li>
			<li>Author: ${article.author}</li>
			<li>Description: ${article.description}</li>
		</ul>
	`;

	element.innerHTML = articleElement;
}

appendArticle(main, article);

const changeBackground = function(id, color) {
	document.querySelector(`#${id}`).style.backgroundColor = color;
}

changeBackground(article.id, "skyblue");

const changeArticleName = (article, newName) => article.name = newName;

changeArticleName(article, "My Article");

document.querySelector(`#${article.id}`).innerHTML = "";

appendArticle(main, article);
