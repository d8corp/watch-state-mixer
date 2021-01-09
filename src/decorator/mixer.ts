import {getDecors, unwatch} from 'watch-state'
import {Mixer} from '..'

interface MixerValues {
  [key: string]: Mixer
}

function mixer (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
  const {value, get: originalGet = value} = descriptor
  return {
    get () {
      const values: MixerValues = getDecors(this) as unknown as MixerValues
      if (!(propertyKey in values)) {
        unwatch(() => values[propertyKey] = new Mixer(originalGet.bind(this)))
      }
      return values[propertyKey].value
    },
    enumerable: true
  }
}

export {
  mixer
}
