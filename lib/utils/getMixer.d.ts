import { Target } from 'watch-state';
import { Mixer } from '..';
declare function getMixer<T extends Target, F extends keyof T>(target: T, field: F): Mixer<T[F]> | undefined;
export { getMixer };
