// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
  mode: 'development',
  resolve: {extensions: ['.ts', '.js'], modules: ['node_modules']},
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.scss$/, use: ['to-string-loader', 'raw-loader', 'sass-loader']},
      {test: /\.svg$/, loader: 'svg-inline-loader'}
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/, helpers.root('../'), {}),
  ]
};
