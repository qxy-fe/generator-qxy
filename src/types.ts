/**
 * @file types
 */

export interface DepMeta {
  name: string
  tag: string
}

export type Dep = string | DepMeta
