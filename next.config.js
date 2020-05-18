const autoprefixer = require('autoprefixer');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const initExport = {
  webpack: (config) => {
  	config.module.rules.push(
	    {
	      test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
	      use: {
	        loader: 'url-loader',
	        options: {
	          limit: 100000
	        }
	      }
	  	},
      	{
	        test: /\.svg$/,
	        use: [{
	          loader: 'react-svg-loader',
	        }],
    	}
    )

    return config;
  },
};

module.exports = withCSS(
  withSass(initExport, {
    postcssLoaderOptions: { parser: true, autoprefixer: true },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }),
);
