const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('./webpack.config'); // webpack options
const complier = webpack(config);
const express = require('express');
const app = express();

app.use(
  middleware(complier, {
    // webpack-dev-middleware options
    publicPath: config.output.publicPath
  })
);

app.listen(3000, () => console.log('server is running!'));
