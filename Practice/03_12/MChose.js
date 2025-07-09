import Keyboard from './Keyboard.js'

class MChose extends Keyboard {
	constructor(
		color,
		numOfKeys,
		isMembrane,
		switchType,
		layout,
		model
	) {
		super(color, numOfKeys, isMembrane, switchType, layout);
		this.model = model;
	}

	changeModel(model) {
		this.model = model;
	}
}

export default MChose;
