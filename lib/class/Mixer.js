'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

var Mixer = /** @class */ (function () {
    function Mixer(target) {
        this.target = target;
        this.state = new watchState.State();
    }
    Mixer.prototype.destructor = function () {
        var _a;
        (_a = this.watcher) === null || _a === void 0 ? void 0 : _a.destructor();
        this.watcher = undefined;
    };
    Mixer.prototype.checkWatcher = function () {
        var _this = this;
        watchState.onClear(function () {
            if (_this.watcher && !_this.watcher.updating) {
                _this.destructor();
            }
        });
        if (!this.watcher) {
            watchState.unwatch(function () {
                var watcher;
                watcher = _this.watcher = new watchState.Watch(function (update) {
                    if (!watcher || watcher === _this.watcher) {
                        if (!update || _this.state.watchers.size || _this.state.caches.size) {
                            _this.state.value = _this.target();
                        }
                        else {
                            _this.destructor();
                        }
                    }
                });
            });
        }
    };
    Object.defineProperty(Mixer.prototype, "value", {
        get: function () {
            if (watchState.scope.activeWatcher) {
                this.checkWatcher();
                return this.state.value;
            }
            else {
                return this.target();
            }
        },
        enumerable: false,
        configurable: true
    });
    return Mixer;
}());

exports.Mixer = Mixer;
