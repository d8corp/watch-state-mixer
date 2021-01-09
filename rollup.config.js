import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import {terser} from 'rollup-plugin-terser'

const input = {
  index: 'src/index.ts',
  'class/index': 'src/class/index.ts',
  'class/Mixer': 'src/class/Mixer.ts',
  'decorator/index': 'src/decorator/index.ts',
  'decorator/mixer': 'src/decorator/mixer.ts',
  'utils/index': 'src/utils/index.ts',
  'utils/getMixer': 'src/utils/getMixer.ts',
}

export default [{
  input,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
}, {
  input,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es'
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6',
        }
      }
    })
  ]
}, {
  input: 'src/index.ts',
  output: {
    file: 'lib/watch-state-mixer.min.js',
    format: 'iife',
    name: 'watchStateMixer',
    plugins: [terser()]
  },
  plugins: [
    typescript()
  ]
}]
