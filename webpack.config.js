var path = require('path');


module.exports = {
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/vendor.js",
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},

	module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: { loader: 'babel-loader' }
	      }
	    ]
	}
}