#!/usr/bin/env node
require('bones').Backbone.sync = require('backbone-stash')('data').sync;
require('bones').plugin.config.secret = '4b6be4b408195388def323740e7cc20053fa6f57f46faf57816a99ae2a257af2';

require('bones-document');
require('bones-admin');
require('bones-auth');

require('bones').load(__dirname);

if (!module.parent) {
    require('bones').start();
}