/**
 * @summary Given a list of names, return a string with the names concatenated
 */
export function cls(...args: Array<string | boolean | undefined>): string {
  return args.filter(Boolean).join(' ').trim()
}
