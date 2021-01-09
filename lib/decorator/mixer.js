'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
var class_Mixer = require('../class/Mixer.js');

function mixer(target, propertyKey, descriptor) {
    var value = descriptor.value, _a = descriptor.get, originalGet = _a === void 0 ? value : _a;
    return {
        get: function () {
            var _this = this;
            var values = watchState.getDecors(this);
            if (!(propertyKey in values)) {
                watchState.unwatch(function () { return values[propertyKey] = new class_Mixer.Mixer(originalGet.bind(_this)); });
            }
            return values[propertyKey].value;
        },
        enumerable: true
    };
}

exports.mixer = mixer;
