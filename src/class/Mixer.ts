import {Watch, State, scope, onClear, unwatch} from 'watch-state'

class Mixer <T = any> {
  public state: State<T> = new State<T>()
  public watcher: Watch
  constructor (protected target: () => T) {}
  destructor () {
    this.watcher?.destructor()
    this.watcher = undefined
  }
  checkWatcher () {
    onClear(() => {
      if (this.watcher && !this.watcher.updating) {
        this.destructor()
      }
    })
    if (!this.watcher) {
      unwatch(() => {
        let watcher
        watcher = this.watcher = new Watch(update => {
          if (!watcher || watcher === this.watcher) {
            if (!update || this.state.watchers.size || this.state.caches.size) {
              this.state.value = this.target()
            } else {
              this.destructor()
            }
          }
        })
      })
    }
  }

  get value (): T {
    if (scope.activeWatcher) {
      this.checkWatcher()
      return this.state.value
    } else {
      return this.target()
    }
  }
}

export {
  Mixer,
}
