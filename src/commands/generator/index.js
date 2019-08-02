const fs = require("fs");
const path = require("path");

const Mustache = require("mustache");

const curl2options = require("../../curl2options");

module.exports = (argv) => {
	const options = curl2options(argv);

	console.log(Mustache.render(fs.readFileSync(path.join(__dirname, "../../../templates/got.mustache")) + "", { options: JSON.stringify(options, null, 4)}));
};

