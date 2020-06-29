const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|svg)$/i,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						esModule: true,
					},
				},
				
			],
		});

		return config;
	},
};



module.exports = withPlugins(
	[
	  withCSS,
	],
	nextConfig
  );