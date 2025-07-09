const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "grey",
	pocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: function(lidStatus) {
		this.idOpen = lidStatus;
	},
	newStrapLength: function(lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft,
			this.strapLength.right = lengthRight;
	}
}

const backpack2 = {
	name: "Everyday Backpack",
	volume: 30,
	toString: function() {
		return `Backpack: ${this.name}, Volume: ${this.volume} liters`;
	},
};

console.log(backpack2.toString()); // "Backpack: Everyday Backpack, Volume: 30 liters"
