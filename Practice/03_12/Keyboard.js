class Keyboard {
	constructor(
		color,
		numOfKeys,
		isMembrane,
		switchType,
		layout
	) {
		this.color = color;
		this.numOfKeys = numOfKeys;
		this.isMembrane = isMembrane;
		this.switchType = switchType;
		this.layout = layout;
	}

	upgradeSwitches(switchType) {
		this.switchType = switchType;
	}

	changeLayout(layout) {
		this.layout = layout;
	}
}

export default Keyboard;
