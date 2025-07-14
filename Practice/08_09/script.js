/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
	name: "Frog Backpack",
	volume: 8,
	color: "green",
	pocketNum: 3,
	strapLength: {
		left: 10,
		right: 10,
	},
	lidOpen: false,
	image: "../../assets/images/frog.svg",
	toggleLid: function(lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function(lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	},
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${frogpack.volume
	}l</span></li>
      <li class="packprop backpack__color">Color:<span> ${frogpack.color
	}</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${frogpack.pocketNum
	}</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${frogpack.strapLength.left
	} inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${frogpack.strapLength.right
	} inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${frogpack.lidOpen ? "open" : "closed"
	}</span></li>
    </ul>  
`;

const appendArticle = function(caption, imageURI, content) {
	let article = document.createElement("article");
	let main = document.querySelector("main");
	article.innerHTML = content;
	appendImgFig(article, imageURI, caption);
	main.append(article);
}

const appendImgFig = function(element, imgURI, caption) {
	let figure = document.createElement("figure");
	let image = document.createElement("img");
	image.setAttribute("src", imgURI);
	image.setAttribute("height", 500);
	figure.append(image);
	let figCaption = document.createElement("figcaption");
	figCaption.innerText = caption;
	figure.append(figCaption);
	element.append(figure);
}

const appendFrogpackArticle = function(frogpack, content) {
	appendArticle(`A ${frogpack.color} ${frogpack.name}`, frogpack.image, content)
}

appendFrogpackArticle(frogpack, content);
