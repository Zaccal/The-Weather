import { SerializedError } from '@reduxjs/toolkit'

interface IMaybeError {
  message: string
}

export function isSerlizeError<T>(error: T): boolean {
  return (error as IMaybeError).message.includes('serializable')
}
