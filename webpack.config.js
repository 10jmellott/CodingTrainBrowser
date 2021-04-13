const path = require('path');

module.exports = {
	entry: './scripts/index.js',
	output: {
		filename: 'site.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/CodingTrainBrowser/dist/'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('node-sass'),
						},
					},
				],
			},
		],
	},
	devServer: {
		port: 8086,
		hot: true
	},
};
