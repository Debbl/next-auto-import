import { describe, expect, it } from 'vitest'
import { createAutoImport } from '../src/index'

describe('createAutoImport', () => {
  it('should be a function', () => {
    expect(createAutoImport).toBeInstanceOf(Function)
  })
})
