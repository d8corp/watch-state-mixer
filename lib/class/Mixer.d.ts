import { Watch, State } from 'watch-state';
declare class Mixer<T = any> {
    protected target: () => T;
    state: State<T>;
    watcher: Watch;
    constructor(target: () => T);
    destructor(): void;
    checkWatcher(): void;
    get value(): T;
}
export { Mixer, };
