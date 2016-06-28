import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import fs from 'fs';
import ssi from 'ssi';

/* eslint-disable no-console */

const port = 3005;
const app = express();
const compiler = webpack(config);
const parser = new ssi(__dirname, "", "");
const ssi_filename = 'index.html';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// Handle server side includes for html files
app.use(function(req,res,next) {
  const filename 	= path.join( __dirname, '../src/' + ssi_filename);

  if(fs.existsSync(filename)) {
    res.send(parser.parse(filename, fs.readFileSync(filename, {encoding: "utf8"})).contents);
  } else {
    next();
  }
});

//For any request return this file
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/reactIndex.html'));
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
