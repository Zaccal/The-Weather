import { TypeTheme } from './Settings.interface'

export default function isTheme<T>(theme: TypeTheme | T): theme is TypeTheme {
  return (
    (theme as TypeTheme) === 'light' ||
    (theme as TypeTheme) === 'light' ||
    (theme as TypeTheme) === 'system'
  )
}
