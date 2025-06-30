/**
 * Ensure prefix of a string
 */
export function ensurePrefix(prefix: string, str: string) {
  if (str.startsWith(prefix)) {
    return str
  }
  return prefix + str
}

/**
 * Ensure suffix of a string
 */
export function ensureSuffix(suffix: string, str: string) {
  if (str.endsWith(suffix)) {
    return str
  }
  return str + suffix
}
