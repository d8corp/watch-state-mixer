'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

function getMixer(target, field) {
    return watchState.getDecors(target)[field];
}

exports.getMixer = getMixer;
