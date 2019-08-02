const got = require("got");

const curl2options = require("../../curl2options");

module.exports = (argv) => {
	const options = curl2options(argv);

	got(options).then(data => {
		console.log(data);
	}).catch(error => {
		console.error(error);
	});
};


