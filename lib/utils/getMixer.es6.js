import { getDecors } from 'watch-state';

function getMixer(target, field) {
    return getDecors(target)[field];
}

export { getMixer };
