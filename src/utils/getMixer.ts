import {getDecors, Target} from 'watch-state'
import {Mixer} from '..'

function getMixer <T extends Target, F extends keyof T> (target: T, field: F): Mixer<T[F]> | undefined {
  return getDecors(target)[field] as unknown as Mixer<T[F]>
}

export {
  getMixer
}
