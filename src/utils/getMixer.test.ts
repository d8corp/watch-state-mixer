import {getMixer, Mixer, mixer} from '..'

describe('getCache', () => {
  test('simple', () => {
    class Test {
      @mixer get field1 (): number {
        return 1
      }
    }

    const test = new Test()
    let cacheOfField1 = getMixer(test, 'field1')

    expect(cacheOfField1).toBe(undefined)

    expect(test.field1).toBe(1)

    cacheOfField1 = getMixer(test, 'field1')

    expect(cacheOfField1).toBeInstanceOf(Mixer)

    expect(cacheOfField1.value).toBe(1)
  })
})
