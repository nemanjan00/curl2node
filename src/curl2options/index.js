const validator = require("validator");

module.exports = (argv) => {
	const options = {};

	if(argv.H || argv.header) {
		argv.H = (argv.H || []).concat(argv.header || []);

		options.headers = {};

		argv.H.forEach(header => {
			header = header.split(":");

			const key = header.shift();
			const value = header.join(":").trim();

			options.headers[key] = value;
		});

		delete argv.H;
		delete argv.header;
	}

	if(argv.dataBinary) {
		options.body = argv.dataBinary;

		delete argv["data-binary"];
		delete argv.dataBinary;
	}

	const urls = argv._.filter(url => {
		try {
			return validator.isURL(url);
		} catch(e) {
			return false;
		}
	});

	delete argv._;

	options.url = urls[0];

	return options;
};

