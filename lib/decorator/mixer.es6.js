import { getDecors, unwatch } from 'watch-state';
import { Mixer } from '../class/Mixer.es6.js';

function mixer(target, propertyKey, descriptor) {
    const { value, get: originalGet = value } = descriptor;
    return {
        get() {
            const values = getDecors(this);
            if (!(propertyKey in values)) {
                unwatch(() => values[propertyKey] = new Mixer(originalGet.bind(this)));
            }
            return values[propertyKey].value;
        },
        enumerable: true
    };
}

export { mixer };
