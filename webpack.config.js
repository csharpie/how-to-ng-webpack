var environment = "development";

if (environment === "development") {
	module.exports = require('./config/webpack.dev.js');
} else {
	module.exports = require('./config/webpack.prod.js');
}