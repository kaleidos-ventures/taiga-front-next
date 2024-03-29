/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2021-present Kaleidos INC
 */

const webpackPreprocessor = require("@cypress/webpack-preprocessor");

const webpackOptions = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};

const options = {
  webpackOptions
};

module.exports = webpackPreprocessor(options);
