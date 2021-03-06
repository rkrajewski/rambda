import { defaultTo } from './defaultTo'
import { path } from './path'
import { curry } from './curry'

function pathOrRaw(defaultValue, inputPath, inputObject) {
  return defaultTo(defaultValue, path(inputPath, inputObject))
}

export const pathOr = curry(pathOrRaw)
