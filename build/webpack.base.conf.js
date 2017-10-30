const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const fs = require('fs');

module.exports = {
	entry:{
		index:[
			path.resolve(__dirname, '../src/main.js')
		]
	},
	output:{
		path:path.resolve(__dirname,'../dist/static'),
		filename:"[name].[hash:4].js",
		publicPath: 'static/'
	},
	module:{
	  	loaders:[
		  	{
	        	test: /\.vue$/,
	        	loader: 'vue-loader'
	      	},
	      	{
	            test: /\.js$/,
	            loader: "babel-loader?presets=es2015",
	            exclude: /node_modules/
	        },
	      	{
	            test: /\.css$/,
	            loader: "style-loader!css-loader!postcss-loader"
	        },
	        {
				test: /\.scss$/i,
				 loader: "style-loader!css-loader!postcss-loader!sass-loader"
			},
	        {
		        test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
		        loader: "file-loader"
      		},
		    {
		        test: /\.(png|jpg|gif|svg)$/,
		        loader: 'url-loader',
		        query: {
		          name: '[name].[ext]?[hash]'
		        }
		    }

      	]
	},
	resolve: {
		extensions: ['.js','.vue'],
	    alias: {vue: 'vue/dist/vue.js'}
	},
	plugins:[
	new webpack.HotModuleReplacementPlugin(),
	new  HtmlWebpackPlugin({
		filename: '../index.html',
		template: path.resolve(__dirname,'../index.html')
	})
	]
}