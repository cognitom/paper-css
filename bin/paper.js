#!/usr/bin/env node

require('reify')
require('async-to-gen/register')({excludes: /\/node_modules\/(?!paper-css\/)/})
require('../lib/cli')
