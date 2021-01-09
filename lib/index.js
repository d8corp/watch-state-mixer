'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('watch-state');
var class_Mixer = require('./class/Mixer.js');
var decorator_mixer = require('./decorator/mixer.js');
var utils_getMixer = require('./utils/getMixer.js');



exports.Mixer = class_Mixer.Mixer;
exports.mixer = decorator_mixer.mixer;
exports.getMixer = utils_getMixer.getMixer;
