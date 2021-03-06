import { State, onClear, unwatch, Watch, scope } from 'watch-state';

class Mixer {
    constructor(target) {
        this.target = target;
        this.state = new State();
    }
    destructor() {
        var _a;
        (_a = this.watcher) === null || _a === void 0 ? void 0 : _a.destructor();
        this.watcher = undefined;
    }
    checkWatcher() {
        onClear(() => {
            if (this.watcher && !this.watcher.updating) {
                this.destructor();
            }
        });
        if (!this.watcher) {
            unwatch(() => {
                let watcher;
                watcher = this.watcher = new Watch(update => {
                    if (!watcher || watcher === this.watcher) {
                        if (!update || this.state.watchers.size || this.state.caches.size) {
                            this.state.value = this.target();
                        }
                        else {
                            this.destructor();
                        }
                    }
                });
            });
        }
    }
    get value() {
        if (scope.activeWatcher) {
            this.checkWatcher();
            return this.state.value;
        }
        else {
            return this.target();
        }
    }
}

export { Mixer };
