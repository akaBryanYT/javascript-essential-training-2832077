/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from './Backpack.js';
import MChose from './MChose.js';

const parentBackpack = new Backpack(
	"Parent backpack",
	10,
	"Black",
	15,
	20,
	20,
	false
);

const MChoseGX87 = new MChose(
	"Black",
	104,
	false,
	"Oil Kings",
	"QWERTY",
	"GX87"
)

console.log(parentBackpack);
console.log(MChoseGX87);
