#!/usr/bin/env node
require("@babel/register");
require = require("esm")(module);
module.exports = require("./src/index.js");
