import type { Arrayable } from './types'

export function toArray<T>(value?: Arrayable<T>): T[] {
  value = value ?? []
  return Array.isArray(value) ? value : [value]
}
