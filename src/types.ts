/**
 * @file types
 */

export type Dep = string | DepMeta

export type DepMap = Record<string, string>

export interface DepMeta {
  name: string
  tag: string
}
